import React from 'react';
import Person from './components/person';
import NavBar from './components/navBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      people: [
        {
          firstName: 'Ramon',
          lastName: 'Reyes',
          address: '333 Woody Ave',
          city: 'Bridgeport',
          state: 'CT'
        },
        {
          firstName: 'Peter',
          lastName:  'Szujewski',
          address: '123 Awesome Ave',
          city: 'Honolulu',
          state: 'HI'
        }
      ]
    }
  }
  render(){
    const people = this.state.people.map((person, index) => <Person key={index} person={person} />);
    return (
      <div>
        <NavBar />
        <div className="people-bin">{people}</div>
      </div>
    );
  }
}
