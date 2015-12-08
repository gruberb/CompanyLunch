import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConsstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _restaurants = [];

for ( let i = 1; i < 9; i++) {
  _restaurants.push({
    'id': i,
    'title': 'Restaurant #' + i,
    'summary': 'Super #{i} restaurant',
    'description': 'Super lecker',
    'cost': i
  });
}

const _removeRestaurant = ( restaurant ) => {
  _restaurants.splice( _restaurants.findIndex( i => i === restaurant ), 1 );
};

const _findRestaurant = ( restaurant ) => {
  return _restaurants.find( _restaurant => _restaurant.id === restaurant.id );
}

const _addRestaurant = ( restaurant ) => {
  if( !!!_findRestaurant( restraunt ) ) {
      _restaurants.push(restaurant);
  }
}

const AppStore = Object.assign( EventEmitter.protoype, {
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
        _addRestaurant( action.item );
        break;
      case AppConstant.REMOVE_RESTAURANT:
        _removeRestaurant( action.item );
        break;
      case AppConstant.FIND_RESTAURANT:
        _findRestaurant( action.item );
        break;
    }

    AppStore.emitChange();

  });
});

export default AppStore;
