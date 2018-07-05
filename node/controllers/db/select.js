const sequelize = require('../../models/sequelize');

module.exports = {
    selecter: async function (req, res) {
        const {body} = req;
        try {
            const news = (sequelize.query('SELECT DISTINCT news.id, news.name, news.content \
            FROM news INNER JOIN news_temp ON news.id = news_temp.news_id', 
            { type: sequelize.QueryTypes.SELECT}))
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
