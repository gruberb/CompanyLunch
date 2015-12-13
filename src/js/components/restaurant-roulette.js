import React from 'react';
import RestaurantList from './restaurant-list';
import AddRestaurant from './add-restaurant';
import Header from './header';
import Navbar from './navbar';

class RestaurantRoulette extends React.Component {
  render() {
    return (
      <div>
        <Navbar workspace_id={this.props.routeParams.workspace_id} />
        <div className='row'>
          <Header />
          <AddRestaurant />
          <RestaurantList workspace_id={this.props.routeParams.workspace_id}/>
        </div>
      </div>

    )
  }
}

export default RestaurantRoulette;
