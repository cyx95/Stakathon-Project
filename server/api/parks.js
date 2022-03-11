const router = require("express").Router();
const { models: { Trail, Park, Review } } = require('../db')
module.exports = router;

router.get('/', async(req, res, next) => {
    try {
        const parks = await Park.findAll()
        res.send(parks)
    } catch (err) {
        next (err)
    }
})