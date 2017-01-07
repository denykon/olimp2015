import React, { Component } from 'react';
import {Menu} from './Menu';

export class Header extends Component {
  render() {
    let menu = {
      items: ['главная', 'контакты', 'тренерский состав', 'о нас', 'услуги']
    };
    return (
      <header>
        <Menu menu={menu}/>
      </header>
    );
  }
}