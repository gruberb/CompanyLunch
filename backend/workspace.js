var mongoose = require('mongoose');
var Restaurant = require('./restaurant');

var WorkspaceSchema = new mongoose.Schema({
  restaurants: [ Restaurant.schema ]
});

module.exports = mongoose.model('Workspace', WorkspaceSchema);
