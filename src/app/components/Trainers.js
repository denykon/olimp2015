import React, { Component } from 'react';
import {trainers} from '../data/data'

export class Trainers extends Component {
  render() {
    return (
      <section>
        <h1>Бокс</h1>
          {
            trainers.boxing.map((item, i) =>
            <div key={i}>
              <p>{item.name}</p>
              <p>{item.position}</p>
              <a href={item.link}>{item.address}</a>
            </div>)
          }
      </section>
    );
  }
}