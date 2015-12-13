import React from 'react';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';

require('../../../stylesheets/components/enterRestaurant.scss');

class AddRestaurant extends React.Component{
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this._saveRestaurant = this._saveRestaurant.bind(this);
  }

  _onChange(event) {
    this.setState(
      { restaurant:
          {
            title: this.refs.title.value,
          }
      }
    );
  }

  _saveRestaurant(event) {
    if(event.key === 'Enter') {
      AppActions.addRestaurant(this.state.restaurant);
      this.refs.title.value = '';
    }
  }

  render() {
    return (
      <div className="enterName">
        <input type="text" ref="title" onChange={ this._onChange } onKeyPress={ this._saveRestaurant} placeholder="Italian place"/>
      </div>
    )
  }
};

export default AddRestaurant;
