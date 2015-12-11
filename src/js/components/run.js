import React from 'react';
import AppStore from '../stores/app-store';
import { Link } from 'react-router';
import _ from 'underscore';

require('../../stylesheets/components/run.scss');

const restaurants = () => {
  return AppStore.getRestaurants();
}

class Run extends React.Component{
  constructor() {
    super();
    this.state = { restaurants: restaurants() };
  }

  _goBack() {
    history.back();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    var winner = _.shuffle(this.state.restaurants)[0];

    return (
      <div className="row winner">
        <h2>{winner.title}</h2>
        <p>{winner.description}</p>
        <button className="button" onClick={this._goBack}>Go Back!</button>
      </div>

    );
  }
}

export default Run;
