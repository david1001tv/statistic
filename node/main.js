/**
 * Module dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const chalk = require('chalk');

const config = require('./config');

const cors = require('cors');

const app = express();

//module.exports = app;

/**
 * Express configuraion
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('port', config.port || 8080);
app.use(compression());
app.use(morgan(':date[web] :method :url :status :response-time ms :remote-addr'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('secret', config.secret);
app.enable('trust proxy');

/**
 * API routes
 */
app.use('/api', require('./routes/db'));

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

const io = require('socket.io');
const socket = io.listen(server);
module.exports.objSockets = function(){
    return socket.sockets;
}

socket.sockets.on('connection', function (_socket) {
    console.log('connected');
    socket.sockets.emit('connection_custom', { url: 'http://localhost:8080/api/select' });
});