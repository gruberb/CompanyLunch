import React from 'react';
import AppActions from '../actions/app-actions';
import AppStore from '../stores/app-store';

class App extends React.Component{
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {name: '', restaurants: AppStore.getRestaurants()};
  }
  update(event) {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update} />
        <h1>{this.state.name}</h1>
        <button onClick={AppActions.addRestaurant.bind(null, this.state.name)}>Add</button>
      </div>
    )
  }
};

export default App;
