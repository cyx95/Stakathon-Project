const router = require("express").Router();
const { models: { Trail, Park, Review } } = require('../db')
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const trails = await Trail.findAll({
      include: [Park, Review]
    });
    res.send(trails)
  } catch (err) {
    next(err);
  }
});
