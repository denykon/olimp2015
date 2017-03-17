import React, { Component } from 'react';
import {Menu} from '../Menu/Menu.jsx';
import {menuList} from '../../data/data';

import style from './style.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <Menu list={menuList}/>
      </header>
    );
  }
}