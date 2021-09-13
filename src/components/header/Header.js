import React from 'react';
import './Header.css'


const Header =(props)=> {
  return (
    <header>
      <a href="http://localhost:3000/" className='titulo'> NETFLY </a>
     
      <i className="fas fa-th" onClick={()=>props.cambiarOrientacion("card-container-row")}/>
      <i className="fas fa-align-justify" onClick={()=>props.cambiarOrientacion("card-container-column")} />
     
    </header>
  );
}

export default Header;