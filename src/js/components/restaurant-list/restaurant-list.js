import React from 'react';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import RestaurantEntry from './restaurant-entry';

const restaurants = () => {
  return { restaurants: AppStore.getRestaurants() };
}

class RestaurantList extends React.Component {
  constructor( props ) {
    super( props );
    this._initRestaurants(props.workspace_id);
    this._onChange = this._onChange.bind( this );
  }

  componentWillMount() {
    AppStore.addChangeListener( this._onChange );
  }

  componentWillUnmount() {
    AppStore.removeChangeListener( this._onChange );
  }

  _initRestaurants( workspace_id ) {
    if( workspace_id ) {
      AppActions.getWorkspace( workspace_id );
    }
    this.state = restaurants();
  }

  _onChange() {
    this.setState( restaurants );
  }

  render() {
    let restaurants = this.state.restaurants.map( restaurant => {
      return <RestaurantEntry key={ restaurant.title } restaurant={ restaurant } />
    })

    return (
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { restaurants }
        </tbody>
      </table>
    )
  }
};

export default RestaurantList;
