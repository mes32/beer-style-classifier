module.exports = (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        console.log('in get');
        res.sendStatus(200);
    });

    return router;
}