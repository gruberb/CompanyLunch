var request = require('superagent');

var API_URL = 'https://companylunch.herokuapp.com/api/';

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
    },
    updateWorkspace: function( workspace_id, workspace ) {
      return request
        .put(API_URL + 'workspaces/' + workspace_id)
        .set('Accept', 'application/json')
        .send({ workspace: workspace })
        .end(function(err, res) {
          return res.body.data;
        });
    }
};

export default Api;
