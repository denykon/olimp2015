import React, { Component } from 'react';

export class Older extends Component {

  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      name: props.name
    }
  }

  makeYounger() {
    this.setState({
      age: this.state.age - 1
    });
  }

  makeOlder() {
    this.setState({
      age: this.state.age + 1
    });
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        {/*<button onClick={this.makeYounger.bind(this)}>Make me younger!</button>*/}
        <button onClick={() => this.makeYounger()}>Make me younger!</button>
        <button onClick={() => this.makeOlder()}>Make me older!</button>
      </div>
    );
  }
}

Older.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number
};