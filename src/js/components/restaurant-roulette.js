import React from 'react';
import RestaurantList from './restaurant-list';
import AddRestaurant from './add-restaurant';

class RestaurantRoulette extends React.Component{
  render() {
    return (
      <div className='row'>
        <AddRestaurant />
        <RestaurantList />
      </div>
    )
  }
}

export default RestaurantRoulette;
