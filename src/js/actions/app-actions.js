import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import Api from '../lib/api';
import history from '../lib/history'

export default {
  addRestaurant ( restaurant ) {
    dispatch({ actionType: AppConstants.ADD_RESTAURANT, restaurant });
  },
  removeRestaurant ( restaurant ) {
    dispatch({ actionType: AppConstants.REMOVE_RESTAURANT, restaurant });
  },
  getWorkspace( workspace_id ) {
    Api.getWorkspace( workspace_id )
      .then(function( workspace ) {
        dispatch({ actionType: AppConstants.GET_WORKSPACE, workspace });
      }, function(error) {
        dispatch({ actionType: AppConstants.FAILED_TO_LOAD, error });
      });
  },
  createWorkspace( workspace ) {
    console.log('inside actions created workspace');
    Api.createWorkspace( workspace )
      .then(function( workspace ) {
        dispatch({ actionType: AppConstants.CREATE_WORKSPACE, workspace });
        history.replaceState(null, '#/workspace/' + workspace.body.data._id);
      }, function(error) {
        dispatch({ actionType: AppConstants.FAILED_TO_CREATE, error });
      });
  },
  updateWorkspace( workspace_id, workspace ) {
    console.log('inside actions update workspace');
    Api.updateWorkspace( workspace_id, workspace )
      .then(function( workspace ) {
        console.log('workspace updated', workspace);
        dispatch({ actionType: AppConstants.UPDATE_WORKSPACE, workspace });
      }, function(error) {
        dispatch({ actionType: AppConstants.FAILED_TO_UPDATE, error });
      });
  }

}
