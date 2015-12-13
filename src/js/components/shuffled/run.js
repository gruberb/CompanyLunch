import React from 'react';
import AppStore from '../../stores/app-store';
import { Link } from 'react-router';
import _ from 'underscore';

require('../../../stylesheets/components/run.scss');

const restaurants = () => {
  return AppStore.getRestaurants();
}

class Run extends React.Component{
  constructor() {
    super();
    this.state = { restaurants: restaurants() };
    this._getWinner = this._getWinner.bind(this);
  }

  _goBack() {
    history.back();
  }

  shouldComponentUpdate() {
    return false;
  }

  _getWinner() {
    if(this.state.restaurants.length > 0) {
      return _.shuffle(this.state.restaurants)[0];
    } else {
      return {title: "You didn't enter a restaurant" };
    }
  }

  render() {
    let winner = this._getWinner();
    return (
      <div className="row winner text-center">
        <h4>And the winner is:</h4>
        <h1>{ winner.title }</h1>
        <button className="button" onClick={ this._goBack }>Go Back!</button>
      </div>

    );
  }
}

export default Run;
