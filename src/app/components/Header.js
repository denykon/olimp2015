import React, { Component } from 'react';
import {Menu} from './Menu';
import {menu} from '../data/data'

export class Header extends Component {
  render() {
    return (
      <header>
        <Menu menu={menu}/>
      </header>
    );
  }
}