import React, { Component } from 'react';

import style from './style.scss';

export class Menu extends Component {
  render() {
    return (
      <nav className="menu">
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