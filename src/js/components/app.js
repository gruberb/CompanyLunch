import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantRoulette from './restaurant-roulette';
import Run from './run';
import Template from './app-template';
import { Redirect, IndexRoute, Router, Route } from 'react-router';

export default () => {
  return(
    <Router>
      <Route path="/" component={Template}>
        <Route name="workspace" path="workspace(/:workspace_id)" component={RestaurantRoulette}></Route>
        <Route name="run" path="run" component={Run}></Route>
      </Route>
      <Redirect from="*" to="workspace" />
    </Router>
  );
}
