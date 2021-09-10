import React from 'react';
import './Header.css'


const Header =(props)=> {
  return (
    <header>
      <h1>Titulo</h1>
      <p>ASC/ DESC</p>
      <i className="fas fa-th" onClick={()=>props.cambiarOrientacion("card-container-row")}/>
      <i className="fas fa-align-justify" onClick={()=>props.cambiarOrientacion("card-container-column")} />
      <form action>
        <input type="text" name="search" id placeholder="Search" />
        <button type="submit"><i className="fas fa-search" /></button>
      </form>
    </header>
  );
}

export default Header;