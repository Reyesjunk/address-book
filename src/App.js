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

  updateSearch(search){
    this.setState({searchTerm: search.toLowerCase()});
  }
  
  render(){
    const filtered = this.state.people.filter((person)=> {
      let name = person.firstName.toLowerCase();
      return name.includes(this.state.searchTerm);
    });
    const people = filtered.map((person, index) => <Person key={index} person={person} />);
    return (
      <div>
        <NavBar updateSearch={(search)=>this.updateSearch(search)}/>
        <div className="people-bin">{people}</div>
      </div>
    );
  }
}
