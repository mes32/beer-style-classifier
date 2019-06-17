module.exports = (express) => {
    const router = express.Router();
    const pool = require('../modules/pool.tsx');

    const parseNumber = (input) => {
        if (input) {
            return Number(input);
        }
        return null;
    }

    router.get('/', (req, res) => {
        const ibu = parseNumber(req.query.ibu);
        const srm = parseNumber(req.query.srm);
        const og = parseNumber(req.query.og);
        const fg = parseNumber(req.query.fg);
        
        let selectSQL = `
        SELECT
            style.id
            , (category_id || letter) AS code
            , category_name AS category
            , style_name AS name
        FROM style
        JOIN style_category ON style.category_id = style_category.id
            WHERE ($1::numeric IS NULL OR $1 >= ibu_min AND $1 <= ibu_max)
            AND ($2::numeric IS NULL OR $2 >= srm_min AND $2 <= srm_max)
            AND ($3::numeric IS NULL OR $3 >= og_min AND $3 <= og_max)
            AND ($4::numeric IS NULL OR $4 >= fg_min AND $4 <= fg_max)
        ;
        `;

        pool.query(selectSQL, [ibu, srm, og, fg]).then(queryResult => {
            res.send(queryResult.rows);
        }).catch(queryError => {
            const errorMessage = `SQL error using route GET /api/search-style. ${queryError}`;
            console.log(errorMessage);
            res.sendStatus(500);
        });
    });

    return router;
}