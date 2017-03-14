import React, { Component } from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header.jsx';
import {Footer} from './components/Footer.jsx';
import {Home} from './components/Home.jsx';
import {Trainers} from './components/Trainers.jsx';

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