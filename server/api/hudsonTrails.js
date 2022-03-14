const router = require("express").Router();
const { models: { Trail, Park } } = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const hudsonTrails = await Trail.findAll({
            include: Park,
            where: {
                parkId: 3
            }
        })
        res.send(hudsonTrails)
    } catch(err) {
        next(err)
    }
})