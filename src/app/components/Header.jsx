import React, { Component } from 'react';
import {Menu} from './Menu.jsx';
import {menuList} from '../data/data';

export class Header extends Component {
  render() {
    return (
      <header>
        <Menu list={menuList}/>
      </header>
    );
  }
}