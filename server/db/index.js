//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Trail = require('./models/Trail')
const Park = require('./models/Park')

Park.hasMany(Trail);
Trail.belongsTo(Park);

module.exports = {
  db,
  models: {
    User,
    Trail,
    Park
  },
}
