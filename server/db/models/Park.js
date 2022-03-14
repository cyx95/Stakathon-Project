const Sequelize = require('sequelize')
const db = require('../db')

const Park = db.define('park', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = Park;