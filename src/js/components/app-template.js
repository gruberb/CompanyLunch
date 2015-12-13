import React from 'react';
import Navbar from './navigation/navbar';

export default ( props ) => {
  return (
    <div>
      <Navbar></Navbar>
      { props.children }
    </div>
  );
}
