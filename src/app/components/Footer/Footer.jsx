import React, { Component } from 'react';
import {Menu} from '../Menu/Menu.jsx';
import {menuList} from '../../data/data';

import style from './style.scss';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Menu list={menuList}/>
      </footer>
    );
  }
}