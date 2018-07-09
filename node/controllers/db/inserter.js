const Sequelize = require('sequelize');
const { app } = require('../../main');
const socket = require('socket.io');
const io = socket.listen(app);

const { News } = require('../../models/index');

io.sockets.on('connection', function (socket) {
    socket.emit('connect', { connection: 'connected' });
});

module.exports = {
    inserter: async function (req, res) {
        const {body} = req;
        try {
            const news = (await News.sync({force: false}).then(() => { 
                News.create({
                    name: body.name,
                    content: body.content,
                });
            }));

            res.status(200).json({
                success: true,
            });

            socket.emit('news', { data: true });
        } catch (error) {
            console.error(error);
            res.status(500).send();
        }
    },
};
