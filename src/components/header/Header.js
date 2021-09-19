import React from 'react';
import './Header.css'
import Formulario from '../formulario/Formulario';


function Header (props) {
  return (
    <header>
      <a href="http://localhost:3000/" className='titulo'> NETFLY </a>
      <div className='formulario'>
        <Formulario filtrarPeliculas={(textoAFiltrar) => props.filtrarPeliculas(textoAFiltrar)} /> 
      </div> 
      
     
    </header>
  );
}

export default Header;