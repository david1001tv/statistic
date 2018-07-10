const sequelize = require('../models/sequelize');
const { News } = require('../models/index');

module.exports = {
    selecter: async function (req, res) {
        const {body} = req;
        try {
            const news = (await News.findAll({ offset: body.offset, limit: 10 }));
            console.log('get data success!');
            res.status(200).json({
                success: true,
                news: news,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send();
        }
    },
};
