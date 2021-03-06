import React from 'react';
import Person from './components/person';
import NavBar from './components/navBar';
import AddForm from './components/addForm';
import people from './people'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      people: people
    }
  }

  updateSearch(search){
    this.setState({searchTerm: search.toLowerCase()});
  }
  
  addPerson(person) {
    this.setState({people: [...this.state.people, person]});
  }

  render() {
    const filtered = this.state.people.filter((person)=> {
      let name = person.firstName.toLowerCase();
      return name.includes(this.state.searchTerm);
    });
    const people = filtered.map((person, index) => <Person key={index} person={person} />);
    return (
      <div>
        <NavBar updateSearch={(search)=>this.updateSearch(search)}/>
        <div className="people-bin">
          {people}
          <AddForm addPerson={(person) => this.addPerson(person)} />
        </div>
      </div>
    );
  }
}
