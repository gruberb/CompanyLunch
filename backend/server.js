// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')

var restaurantController = require('./restaurantController');
var app = express();

var whitelist = [
  'http://localhost:3000',
  'https://companylunch-frontend.herokuapp.com',
  'http://companylunch-frontend.herokuapp.com'
];

var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

// Connect to MongoDB
mongoose.connect(process.env.databaseUri);

app.use(cors(corsOptions));

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Use environment defined port or 3000
var router = express.Router();

router.route('/workspaces')
  .post(restaurantController.postWorkspace);

router.route('/workspaces/:workspace_id')
  .get(restaurantController.getWorkspaceById)
  .put(restaurantController.putWorkspaceById);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(process.env.PORT || 5000);
