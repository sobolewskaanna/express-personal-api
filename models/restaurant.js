var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  location: String,
  rating: String
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
