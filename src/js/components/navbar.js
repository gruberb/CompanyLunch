import React from 'react';
import { Link } from 'react-router';

require('../../stylesheets/components/navbar.scss');

export default (props) => {
  return (
    <ul>
      <li>RestaurantRoulette</li>
      <Link to="/run">Run</Link>
      <li>Save</li>
    </ul>
  )
}
