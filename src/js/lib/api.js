var request = require('superagent'); // (1)

var API_URL = 'http://localhost:5000/api/';

var Api = {
    getWorkspace: function(workspace_id) {
      return request
        .get(API_URL + 'workspaces/' + workspace_id)
        .set('Accept', 'application/json')
        .end(function(err, res) {
          return res.body.data;
        });
    },
    createWorkspace: function( workspace ) {
      return request
        .post(API_URL + 'workspaces')
        .set('Accept', 'application/json')
        .send({ workspace: workspace })
        .end(function(err, res) {
          return res.body.data;
        });
    }
};

export default Api;
