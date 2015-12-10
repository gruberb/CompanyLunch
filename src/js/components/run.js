import React from 'react';
import AppStore from '../stores/app-store';
import { shuffle } from '../lib/utils';
import { Link } from 'react-router';

require('../../stylesheets/components/run.scss');

const restaurants = () => {
  return { restaurants: AppStore.getRestaurants() };
}

class Run extends React.Component{
  constructor() {
    super();
    this.state = restaurants();
  }

  render() {
    let winner = shuffle(this.state.restaurants.map( restaurant => {
      return restaurant;
    }))[0];

    return (
      <div className="row winner">
        <h2>{winner.title}</h2>
        <p>{winner.description}</p>
        <Link to="/" className="backButton"><button className="button" >Go Back!</button></Link>
      </div>

    );
  }
}

export default Run;
