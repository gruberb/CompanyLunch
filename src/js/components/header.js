import React from 'react';

require('../../stylesheets/components/header.scss');

export default (props) => {
  return (
    <div className="header">
      <h3>{props.headertxt}</h3>
      <p>{props.explanation}</p>
    </div>
  )
}
