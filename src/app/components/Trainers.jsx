import React from 'react';
import {trainers} from '../data/data';

export function Trainers(props) {
  return (
    <section className="trainers">
      <h1>Бокс</h1>
      {
        trainers.boxing.map((item, i) =>
          <div key={i}>
            <p>{item.name}</p>
            <p>{item.position}</p>
            <a href={item.link}>{item.address}</a>
          </div>
        )
      }
    </section>
  );
}