import React from 'react';
import AppActions from '../actions/app-actions';
import RemoveButton from './remove-button';

export default ( props ) => {
  return (
    <div className="medium-12 columns">
      <h4>{ props.restaurant.title }</h4>
      <p>{ props.restaurant.summary }</p>
      <RemoveButton handler={ AppActions.removeRestaurant.bind(null, props.restaurant) } txt='Remove Restaurant' />
    </div>
  )
}
