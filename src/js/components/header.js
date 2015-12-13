import React from 'react';

require('../../stylesheets/components/header.scss');

export default (props) => {
  return (
    <div className="header">
      <h3>Welcome to CompanyLunch!</h3>
      <p>You cannot decide where to go to lunch today? CompanyLunch is here to help!</p>
      <p>For the first step, just enter the details (name, description and average price) into the form fields, and add them to your list! After you've entered your favourite choices, it's time to <b>hit the Run button at the top to get a completely randommized choice</b>!
      When you want to share your list and save it for later, just <b>hit the Save button on top and share the link</b> with your colleagues.</p>
    </div>
  )
}
