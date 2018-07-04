const Sequelize = require('sequelize');

const {News} = require('../../models/index');

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
        } catch (error) {
            console.error(error);
            res.status(500).send();
        }
    },
};
