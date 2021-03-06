import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstant from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _restaurants = [];

const _removeRestaurant = ( restaurant ) => {
  _restaurants.splice( _restaurants.findIndex( i => i === restaurant ), 1 );
};

const _findRestaurant = ( restaurant ) => {
  return _restaurants.find( _restaurant => _restaurant.title === restaurant.title );
}

const _addRestaurant = ( restaurant ) => {
  if( !!!_findRestaurant( restaurant ) ) {
      _restaurants.unshift(restaurant);
  } else {
    // restaurant is already in the list
  }
}

const _initRestaurants = ( workspace ) => {
  _restaurants = workspace.body.data.restaurants;
}

const AppStore = Object.assign( EventEmitter.prototype, {
  emitChange() {
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ) {
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ) {
    this.removeListener( CHANGE_EVENT, callback )
  },

  getRestaurants() {
    return _restaurants;
  },

  dispatcherIndex: register( function( action ) {
    switch( action.actionType ) {
      case AppConstant.ADD_RESTAURANT:
        _addRestaurant( action.restaurant );
        break;
      case AppConstant.REMOVE_RESTAURANT:
        _removeRestaurant( action.restaurant );
        break;
      case AppConstant.GET_WORKSPACE:
        _initRestaurants( action.workspace );
        break;
    }

    AppStore.emitChange();

  })
});

export default AppStore;
