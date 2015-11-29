import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: "This is the current state" }
  }
  update(e) {
    this.setState({txt: e.target.value })
  }
  render() {
    return (
      <div>
        <input type="Text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default App
