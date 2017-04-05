import React from 'react';

export default function Person(props){
  return (
    <div className="person">
      <div>
        <h1>{`${props.person.firstName} ${props.person.lastName}`}</h1>
      </div>
      <ul>
        <li>Addres: {props.person.address}</li>
        <li>City: {props.person.city}</li>
        <li>State: {props.person.state}</li>
      </ul>
    </div>
  );
}