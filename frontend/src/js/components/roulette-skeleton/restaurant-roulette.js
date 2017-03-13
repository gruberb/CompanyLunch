import React from 'react';
import RestaurantList from '../restaurant-list/restaurant-list';
import AddRestaurant from '../new-restaurant/add-restaurant';
import Navbar from '../navigation/navbar';

class RestaurantRoulette extends React.Component {
  render() {
    return (
      <div>
        <Navbar workspace_id={this.props.routeParams.workspace_id} />
        <div className='row'>
          <AddRestaurant />
          <RestaurantList workspace_id={this.props.routeParams.workspace_id}/>
        </div>
      </div>
    );
  }
}

export default RestaurantRoulette;
