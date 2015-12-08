import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  addRestaurant ( item ) {
    dispatch({
      actionType: AppConstants.ADD_RESTAURANT, item
    });
  },
  removeRestaurant ( item ) {
    dispatch({
      actionType: AppConstants.REMOVE_RESTAURANT, item
    });
  }
}
