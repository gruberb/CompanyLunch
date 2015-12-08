import React from 'react';
import AppActions from '../actions/app-actions';

class App extends React.Component{
  render() {
    return <h1 onClick={AppActions.addRestaurant.bind(null, 'this is the item')}>A Flux App</h1>;
  }
};

export default App;
