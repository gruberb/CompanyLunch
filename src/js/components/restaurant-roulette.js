import React from 'react';
import RestaurantList from './restaurant-list';
import AddRestaurant from './add-restaurant';
import Header from './header';
import Navbar from './navbar';

class RestaurantRoulette extends React.Component{
  render() {
    return (
      <div>
        <Navbar brand='RestaurantRoulette'
                run='Run'
                share='Save' />
        <div className='row'>
          <Header headertxt='Let me help choosing your Restaurant!'
                  explanation='Fill out the form fields and click the save button.' />
          <AddRestaurant />
          <RestaurantList />
        </div>
      </div>

    )
  }
}

export default RestaurantRoulette;
