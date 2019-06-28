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
        const category = parseNumber(req.query.category);
        const ibu = parseNumber(req.query.ibu);
        const srm = parseNumber(req.query.srm);
        const og = parseNumber(req.query.og);
        const fg = parseNumber(req.query.fg);
        const abv = parseNumber(req.query.abv);
        
        const selectSQL = `
        SELECT
            style.id
            , (category_id || letter) AS code
            , category_name AS category
            , style_name AS name
            , ibu_min
            , ibu_max
            , srm_min
            , srm_max
            , og_min
            , og_max
            , fg_min
            , fg_max
            , abv_min
            , abv_max
        FROM style
        JOIN style_category ON style.category_id = style_category.id
            WHERE ($1::numeric IS NULL OR $1 = style_category.id)
            AND ($2::numeric IS NULL OR $2 >= ibu_min AND $2 <= ibu_max)
            AND ($3::numeric IS NULL OR $3 >= srm_min AND $3 <= srm_max)
            AND ($4::numeric IS NULL OR $4 >= og_min AND $4 <= og_max)
            AND ($5::numeric IS NULL OR $5 >= fg_min AND $5 <= fg_max)
            AND ($6::numeric IS NULL OR $6 >= abv_min AND $6 <= abv_max)
        ORDER BY category_id, letter
        ;
        `;

        pool.query(selectSQL, [category, ibu, srm, og, fg, abv]).then(queryResult => {
            res.send(queryResult.rows);
        }).catch(queryError => {
            const errorMessage = `SQL error using route GET /api/search-style. ${queryError}`;
            console.log(errorMessage);
            res.sendStatus(500);
        });
    });

    return router;
}