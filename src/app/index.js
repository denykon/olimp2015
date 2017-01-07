import React, { Component } from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import {Trainers} from './components/Trainers';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home name={'Denis'} initialAge={35}/>
        <Trainers/>
        <Footer/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));