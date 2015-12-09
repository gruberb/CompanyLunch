import React from 'react';

require('../../stylesheets/components/navbar.scss');

export default (props) => {
  return (
    <ul>
      <li>{props.brand}</li>
      <li>{props.run}</li>
      <li>{props.share}</li>
    </ul>
  )
}
