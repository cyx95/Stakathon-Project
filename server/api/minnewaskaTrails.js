const router = require("express").Router();
const { models: { Trail, Park } } = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const minnewaskaTrails = await Trail.findAll({
            include: Park,
            where: {
                parkId: 2
            }
        })
        res.send(minnewaskaTrails)
    } catch(err) {
        next(err)
    }
})