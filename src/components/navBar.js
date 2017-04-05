import React from 'react';

export default function NavBar(props){
  return (
    <nav>
      <h1>React Address Book</h1>
      <div className="form-wrapper">
        <form>
          <input type="search" id="search" onChange={(e)=>props.updateSearch(e.target.value)} placeholder="Find your contacts"/>
        </form>
      </div>
    </nav>
  );
}