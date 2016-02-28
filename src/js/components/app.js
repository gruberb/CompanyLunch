import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantRoulette from './roulette-skeleton/restaurant-roulette';
import Run from './shuffled/run';
import Impressum from './imprint/imprint';
import Template from './app-template';
import { IndexRoute, Router, Route } from 'react-router';

export default () => {
  return(
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={RestaurantRoulette} />
        <Route path="workspace/:workspace_id" component={RestaurantRoulette}></Route>
        <Route path="run" component={Run}></Route>
        <Route path="impressum" component={Impressum}></Route>
      </Route>
    </Router>
  );
};
