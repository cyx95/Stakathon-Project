const router = require("express").Router();
const { models: { Trail, Park } } = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const bearTrails = await Trail.findAll({
            include: Park,
            where: {
                parkId: 1
            }
        })
        res.send(bearTrails)
    } catch(err) {
        next(err)
    }
})