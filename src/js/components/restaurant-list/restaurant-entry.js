import React from 'react';
import AppActions from '../../actions/app-actions';
import RemoveButton from './remove-button';

export default ( props ) => {
  return (
    <tr>
      <td>{ props.restaurant.title }</td>
      <td>{ props.restaurant.description }</td>
      <td>{ props.restaurant.cost }</td>
      <td><RemoveButton handler={ AppActions.removeRestaurant.bind(null, props.restaurant) } txt='Remove' /></td>
    </tr>

  )
}
