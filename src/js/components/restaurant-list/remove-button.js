import React from 'react';

export default (props) => {
  return (
    <button
    className="button alert"
    onClick={ props.handler }>
    { props.txt }
    </button>
  );
};
