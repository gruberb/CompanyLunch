var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  cost: { type: Number, default: '0' }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
