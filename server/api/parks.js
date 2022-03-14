const router = require("express").Router();
const {
  models: { Trail, Park },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const parks = await Park.findAll({
      include: Trail
    });
    res.send(parks);
  } catch (err) {
    next(err);
  }
});

router.get("/:parkId", async (req, res, next) => {
  try {
    const singlePark = await Park.findByPk(req.params.parkId, {
      include: Trail
    });
    res.send(singlePark);
  } catch (err) {
    next(err);
  }
});
