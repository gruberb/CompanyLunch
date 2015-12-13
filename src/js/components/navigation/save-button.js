import React from 'react';

class SaveButton extends React.Component {
  render() {
    return (
      <a onClick={this.props.saveWorkspace}>Save</a>
    )
  }
};

export default SaveButton;
