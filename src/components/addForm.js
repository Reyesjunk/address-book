import React from 'react';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  toggleEditing(editing) {
    this.setState({
      editing
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPerson = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value
    };
    this.refs.personForm.reset();
    this.props.addPerson(newPerson);
  }

  render() {    
    if (!this.state.editing) {
      return (
        <div className='form-container'>
          <button className='btn' onClick={(e) => this.toggleEditing(true)}>Add</button>
        </div>
      );
    }
    return (
      <div className="form-container">
        <h3>Add a person...</h3>
        <form onSubmit={(e) => this.handleSubmit(e)} ref="personForm">
          <label htmlFor="firstName"></label>
            <input id="firstName" type="text" placeholder="First name" ref="firstName" />
          <label htmlFor="lastName"></label>
            <input id="lastName" type="text" placeholder="Last name" ref="lastName" />
          <label htmlFor="address"></label>
            <input id="address" type="text" placeholder="Address" ref="address" />
          <label htmlFor="city"></label>
            <input id="city" type="text" placeholder="City" ref="city" />
          <label htmlFor="state"></label>
            <input id="state" type="text" placeholder="State" ref="state" />
          <button type='submit'>Submit</button>
          <button onClick={(e) => this.toggleEditing(false)}>Cancel</button>
        </form>
      </div>
    );
  }
}