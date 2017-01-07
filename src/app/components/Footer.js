import React, { Component } from 'react';
import {Menu} from './Menu';

export class Footer extends Component {
  render() {
    let menu = {
      items: ['главная', 'контакты', 'тренерский состав', 'о нас', 'услуги']
    };
    return (
      <footer>
        <Menu menu={menu}/>
      </footer>
    );
  }
}