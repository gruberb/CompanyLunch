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
    }
};

export default Api;
