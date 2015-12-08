import React from 'react';
import AppActions from '../actions/app-actions';
import AppStore from '../stores/app-store';

class AddRestaurant extends React.Component{
  constructor() {
    super();
    this.state = { restaurant: { title: '', summary: '' } };
    this._onChange = this._onChange.bind( this );
    this._saveRestaurant = this._saveRestaurant.bind(this);
  }

  _onChange(event) {
    this.setState( { restaurant: { title: this.refs.title.value, summary: this.refs.summary.value } } );
  }

  _saveRestaurant() {
    AppActions.addRestaurant(this.state.restaurant);
    this.refs.title.value = '';
    this.refs.summary.value = '';
  }

  render() {
    return (
      <div className="row">
        <div className="large-4 columns">
          <label>Name
            <input type="text" ref="title" onChange={ this._onChange } placeholder="Italian place"/>
          </label>
        </div>
        <div className="large-4 columns">
          <label>Description
            <input type="text" ref="summary" onChange={ this._onChange } placeholder="Go there before 12pm"/>
          </label>
        </div>
        <div className="large-4 columns">
          <button className="button" onClick={ this._saveRestaurant }>Save</button>
        </div>

      </div>
    )
  }
};

export default AddRestaurant;
