import React from 'react';
import AppActions from '../../actions/app-actions';
import RemoveButton from './remove-button';

export default ( props ) => {
  return (
    <tr>
      <td>{ props.restaurant.title }</td>
      <td><RemoveButton handler={ AppActions.removeRestaurant.bind(null, props.restaurant) } txt='Remove' /></td>
    </tr>

  )
}
