const Sequelize = require("sequelize");
const db = require("../db");

const Trail = db.define("trail", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  difficulty: {
    type: Sequelize.ENUM("Easy", "Moderate", "Hard"),
  },
  miles: {
    type: Sequelize.DECIMAL,
  },
  elevation: {
    type: Sequelize.INTEGER,
  },
  routeType: {
    type: Sequelize.ENUM("Loop", "Out and back"),
  },
});

module.exports = Trail;
