import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    return (
      <nav className="Menu">
        <ul>
          {this.props.list.items.map((item, i) => <li key={i}><a href="#">{item}</a></li>)}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  list: React.PropTypes.object
};