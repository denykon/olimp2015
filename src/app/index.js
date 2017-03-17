import React, { Component } from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header/Header.jsx';
import {Footer} from './components/Footer/Footer.jsx';
import {Home} from './components/Home/Home.jsx';
import {Trainers} from './components/Trainers/Trainers.jsx';
import {trainers} from './data/data';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home name={'Denis'} initialAge={35}/>
        <Trainers title='Boxing' trainers={trainers.boxing}/>
        <Footer/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));