import React from "react";
import Header from  './components/header/Header';
import Footer from  './components/footer/Footer';
import Peliculas from './components/peliculas/Peliculas';
import Formulario from './components/formulario/Formulario';



function App() {
  return (
    <>
  
    <Header />
    
    <Peliculas />

    <Formulario />
    
    <Footer />
    
 
    </>
  );
}

export default App;