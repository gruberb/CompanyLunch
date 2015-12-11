import React from 'react';
import AppStore from '../stores/app-store';
import RestaurantEntry from './restaurant-entry';

const restaurants = (workspace_id) => {
  return { restaurants: AppStore.getRestaurants(workspace_id) };
}

class RestaurantList extends React.Component{
  constructor(props) {
    super(props);
    this.state = restaurants(props.workspace_id);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener( this._onChange );
  }

  componentWillUnmount() {
    AppStore.removeChangeListener( this._onChange );
  }

  _onChange() {
    this.setState( restaurants );
  }

  render() {
    let restaurants = this.state.restaurants.map( restaurant => {
      return <RestaurantEntry key={ restaurant.id } restaurant={ restaurant } />
    })

    return (
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Cost</th>
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
