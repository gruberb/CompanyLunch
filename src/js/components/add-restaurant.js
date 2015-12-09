import React from 'react';
import AppActions from '../actions/app-actions';
import AppStore from '../stores/app-store';

class AddRestaurant extends React.Component{
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this._saveRestaurant = this._saveRestaurant.bind(this);
  }

  _onChange(event) {
    this.setState(
      {
        restaurant:
          {
            title: this.refs.title.value,
            description: this.refs.description.value,
            cost: this.refs.cost.value,
            summary: this.refs.summary.value
          }
      }
    );
  }

  _saveRestaurant() {
    AppActions.addRestaurant(this.state.restaurant);
    this.refs.title.value = '';
    this.refs.description.value = '';
    this.refs.cost.value = '';
    this.refs.summary.value = '';
  }

  render() {
    return (
      <div>
        <div>
          <label>Name
            <input type="text" ref="title" onChange={ this._onChange } placeholder="Italian place"/>
          </label>
        </div>
        <div>
          <label>Description
            <textarea ref="description" onChange={ this._onChange } rows="3" placeholder="This place has a nice terasse."/>
          </label>
        </div>
        <div>
          <label>Cost
            <input type="number" ref="cost" onChange={ this._onChange } />
          </label>
        </div>
        <div>
          <label>Summary
            <input type="text" ref="summary" onChange={ this._onChange } placeholder="Pretty packed but cheap and good food."/>
          </label>
        </div>
        <button className="button" onClick={ this._saveRestaurant }>Save</button>
      </div>
    )
  }
};

export default AddRestaurant;
