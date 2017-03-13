var Workspace = require('./workspace');
var Restaurant = require('./restaurant');

exports.postWorkspace = function(req, res) {
  var workspace = new Workspace();

  workspace.restaurants = [];

  req.body.workspace.forEach(function(restaurant) {
    workspace.restaurants.push(new Restaurant(restaurant));
  });

  workspace.save(function(err) {
    if(err) {
      return res.status(500).send({
        success: false,
        error: err
      });
    }

    res.json({ status: 200, success: true,  message: 'Hurray, we have a new workspace in our Database!', data: workspace });
  });
};

exports.putWorkspaceById = function(req, res) {
  Workspace.findById({ _id: req.params.workspace_id }, function(err, workspace) {
    if (err) {
      return res.status(500).send({
        success: false,
        error: 'Something went wrong.'
      });
    }

    workspace.restaurants = [];

    req.body.workspace.forEach(function(restaurant) {
      workspace.restaurants.push(new Restaurant(restaurant));
    });

    workspace.save(function(err) {
      if (err) {
        return res.status(500).send({
          success: false,
          error: err
        });
      }

      res.json({ status: 200, success: true,  message: 'The space was updated successfully.', data: workspace });
    });
  });
};

exports.getWorkspaceById = function(req, res) {
  Workspace.findById({ _id: req.params.workspace_id }, function(err, workspace) {
    if(err) {
      return res.status(500).send({
        success: false,
        error: 'Something went wrong.'
      });
    }

    res.json({ status: 200, success: true,  message: 'Here is the workspace you wanted, human.', data: workspace });
  });
};
