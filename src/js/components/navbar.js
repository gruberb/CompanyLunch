import React from 'react';
import AppActions from '../actions/app-actions';
import AppStore from '../stores/app-store';
import SaveButton from './save-button';
import { Link } from 'react-router';

require('../../stylesheets/components/navbar.scss');

class Navbar extends React.Component{
  constructor() {
    super();
  }

  createWorkspace() {
    AppActions.createWorkspace(AppStore.getRestaurants());
  }

  render() {
    return (
      <ul className="navigation">
      <li>RestaurantRoulette</li>
      <Link to="run">Run</Link>
      <li><SaveButton createWorkspace={this.createWorkspace} /></li>
      </ul>
    );
  }
};

export default Navbar;
