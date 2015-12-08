import React from 'react';
import AppActions from '../actions/app-actions';
import AppStore from '../stores/app-store';

class AddRestaurant extends React.Component{
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { restaurant: {title: ''}};
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      AppActions.addRestaurant(this.state.restaurant);
    }
  }

  onChange(event) {
    this.setState({restaurant: {title: event.target.value}});
  }

  render() {
    return (
      <div className="row">
        <input type="text" onKeyDown={ this.handleKeyPress } onChange={this.onChange} value={ this.state.restaurant.title }/>
      </div>
    )
  }
};

export default AddRestaurant;
