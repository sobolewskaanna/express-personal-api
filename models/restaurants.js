var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  location: String,
  starRating: String,
  website: String
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
