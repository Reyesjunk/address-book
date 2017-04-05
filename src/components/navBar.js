import React from 'react';

export default function NavBar(props){
  return (
    <nav>
      <h1>React Address Book</h1>
      <div className="form-wrapper">
        <form>
          <input type="search" id="search" placeholder="Find your contacts"/>
          <button className="btn">Search</button>
        </form>
      </div>
    </nav>
  );
}