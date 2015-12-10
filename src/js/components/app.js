import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantRoulette from './restaurant-roulette';
import Run from './run';
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';

export default () => {
  return(
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={RestaurantRoulette}></IndexRoute>
        <Route path="run" component={Run}></Route>
      </Route>
    </Router>
  );
}
