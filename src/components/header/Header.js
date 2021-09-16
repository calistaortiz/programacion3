import React from 'react';
import './Header.css'
import Formulario from '../formulario/Formulario';


function Header (props) {
  return (
    <header>
      {/* // <img src="../public/images/popcorn.png" alt="" /> // */}
      <a href="http://localhost:3000/" className='titulo'> NETFLY </a>
      <div><Formulario filtrarPeliculas={(textoAFiltrar) => props.filtrarPeliculas(textoAFiltrar)} /> </div> 
      
     
    </header>
  );
}

export default Header;