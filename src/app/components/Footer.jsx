import React, { Component } from 'react';
import {Menu} from './Menu';
import {menu} from '../data/data';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Menu menu={menu}/>
      </footer>
    );
  }
}