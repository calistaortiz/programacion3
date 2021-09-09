import React, {Component} from 'react';
import Tarjetas from '../tarjetas/Tarjetas';


class Peliculas extends Component {

    constructor(){
        super()
        this.state = {
            peliculas: [],
            peliculasIniciales:[],
            isLoaded: false, 
            nextUrl: ''
        }
    }

    componentDidMount(){
        console.log('peliculas');
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=c6008cb55dc77f123f073cb070c2193b&language=en-US&page=1';

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                    peliculasIniciales: data.results,
                })
            })
            .catch( error => console.log(error))
    }

    addMore(){
        let url = this.state.nextUrl;

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    personajes: this.state.personajes.concat(data.results),
                    nextUrl:data.info.next
                })
            })
            .catch( error => console.log(error))

    }

    deleteCard(personajeABorrar){
        let personajesQueQuedan = this.state.personajes.filter( personaje => personaje.id !== personajeABorrar );

        this.setState({
            personajes: personajesQueQuedan
        })
    }

    filtrarPersonajes(textoAFiltrar){
        let personajesFiltrados = this.state.personajesIniciales.filter( personaje => personaje.name.toLowerCase().includes(textoAFiltrar.toLowerCase()));

        this.setState({
            personajes: personajesFiltrados
        })
    }

    render(){
        console.log('renderice RYM');
            return(
                <main className= "cuerpo"> 
                <button type="button">Cargar más tarjetas</button>
                <section className="card-container">
                {
                    this.state.peliculas.length !== 0?
                    this.state.peliculas.map((pelicula, idx)=> <Tarjetas info={pelicula} key={idx+pelicula.title} />):
                    <h2> CARGANDOOOO.... </h2>
                }

                </section>
            </main>
            )
        }

}

export default Peliculas;