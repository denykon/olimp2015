import React, { Component } from 'react';
import {Menu} from './Menu.jsx';
import {menuList} from '../data/data';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Menu list={menuList}/>
      </footer>
    );
  }
}