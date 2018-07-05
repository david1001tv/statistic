const sequelize = require('../../models/sequelize');

//const {News} = require('../../models/index');

module.exports = {
    selecter: async function (req, res) {
        const {body} = req;
        try {
            const news = (sequelize.query('SELECT * FROM news_temp', { type: sequelize.QueryTypes.SELECT}))
            .then(news => {
                console.log('get data success!');
                res.status(200).json({
                    success: true,
                    news: news,
                });
                sequelize.query('DELETE FROM news_temp');
                console.log('delete data success!');
            });
        } catch (error) {
            console.error(error);
            res.status(500).send();
        }
    },
};
