const Sequelize = require('sequelize');

const { News } = require('../models/index');
const objSockets = require('../main');

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
            
            objSockets.objSockets().emit('connection_custom', { url: 'http://localhost:8080/api/select' });

            res.status(200).json({
                success: true,
            }); 
        } catch (error) {
            console.error(error);
            res.status(500).send();
        }
    },
    updater: async function (req, res) {
        const {body} = req;
        try {
            const news = (await News.findOne({ where: { id: body.id } }));
            (await news.update({
                    name: body.name,
                    content: body.content,
            }));

            objSockets.objSockets().emit('connection_custom', { url: 'http://localhost:8080/api/select' });

            res.status(200).json({
                success: true,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send();
        }
    },
    deleter: async function (req, res) {
        const {body} = req;
        try {
            const news = (await News.findOne({ where: { id: body.id } }));
            (await news.destroy());

            objSockets.objSockets().emit('connection_custom', { url: 'http://localhost:8080/api/select' });

            res.status(200).json({
                success: true,
            }); 
        } catch (error) {
            console.error(error);
            res.status(500).send();
        }
    },
};
