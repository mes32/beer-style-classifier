module.exports = (express) => {
    const router = express.Router();
    const pool = require('../modules/pool.tsx');

    router.get('/', (req, res) => {
        let selectSQL = `
        SELECT id, category_name AS name FROM style_category;
        `;

        pool.query(selectSQL).then(queryResult => {
            console.log(queryResult.rows);
            res.send(queryResult.rows);
        }).catch(queryError => {
            const errorMessage = `SQL error using route GET /api/category. ${queryError}`;
            console.log(errorMessage);
            res.sendStatus(500);
        });
    });

    return router;
}