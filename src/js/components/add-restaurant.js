import React from 'react';
import AppActions from '../actions/app-actions';
import AppStore from '../stores/app-store';

class AddRestaurant extends React.Component{
  constructor() {
    super();
    this.state = { restaurant: { title: '' } };
    this.handleKeyPress = this.handleKeyPress.bind( this );
    this.onChange = this.onChange.bind( this );
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      AppActions.addRestaurant( this.state.restaurant );
      event.target.value = '';
    }
  }

  onChange(event) {
    this.setState( { restaurant: { title: event.target.value } } );
  }

  render() {
    return (
      <div className="row">
        <input type="text" onKeyDown={ this.handleKeyPress } onChange={ this.onChange } value={ this.state.restaurant.title }/>
      </div>
    )
  }
};

export default AddRestaurant;
