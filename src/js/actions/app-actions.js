import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import Api from '../lib/api';

export default {
  addRestaurant ( item ) {
    dispatch({ actionType: AppConstants.ADD_RESTAURANT, item });
  },
  removeRestaurant ( item ) {
    dispatch({ actionType: AppConstants.REMOVE_RESTAURANT, item });
  },
  getWorkspace( workspace_id ) {
    Api.getWorkspace(workspace_id)
      .then(function(item) {
        // Stores that optimistically updated may not do anything
        // with a "SUCCESS" action, but you might e.g. stop showing
        // a loading indicator, etc.
        dispatch({ actionType: AppConstants.GET_WORKSPACE, item });
      }, function(error) {
        // Stores can roll back by watching for the error case.
        dispatch({ actionType: AppConstants.FAILED_TO_LOAD, error });
      });
  }
}
