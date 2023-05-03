import React from 'react';
import './SecondComponent.css';

function SecondComponent(props) {
  const secondArr = props.secondArr;

  return (
    <div>

    <h1>First List From React</h1>
    
    <ul>
      {secondArr.map((e , i) => (
          <li key={i}>
          <span>{i}: </span>  <span>{e}</span>
        </li>
      ))}
    </ul>
      </div>
  );
}

export default SecondComponent;