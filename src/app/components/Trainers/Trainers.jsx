import React from 'react';

export function Trainers(props) {
  return (
    <section className="trainers">
      <h1>{props.title}</h1>
      {
        props.trainers.map((item, i) =>
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

Trainers.propTypes = {
  title: React.PropTypes.string.isRequired,
  trainers: React.PropTypes.array.isRequired
};