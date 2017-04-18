import React, { Component } from 'react';
import {Menu} from '../Menu/Menu.jsx';
import {menuList} from '../../data/data';

import style from './style.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <img src="app/img/100.png" alt="Logo"/>
        <img src="app/200.jpg" alt="Logo"/>
        <img src="300.jpg" alt="Logo"/>
        <Menu list={menuList}/>
      </header>
    );
  }
}