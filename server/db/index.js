//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Trail = require('./models/Trail')
const Park = require('./models/Park')
const Review = require('./models/Review')

Park.hasMany(Trail);
Trail.belongsTo(Park);

Trail.hasMany(Review);
Review.belongsTo(Trail);

User.hasMany(Review);
Review.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Trail,
    Park,
    Review
  },
}
