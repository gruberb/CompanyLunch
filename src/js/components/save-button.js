import React from 'react';

class SaveButton extends React.Component {
  render() {
    return (
      <input type="button" onClick={this.props.saveWorkspace} value="Save" />
    )
  }
};

export default SaveButton;
