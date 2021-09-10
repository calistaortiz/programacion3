import React, {Component} from 'react';
import Tarjetas from '../tarjetas/Tarjetas';
import Formulario from '../formulario/Formulario';


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
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=c6008cb55dc77f123f073cb070c2193b&language=en-US&page=' + this.state.nextUrl +1; 

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    nextUrl:data.page 
                })
            })
            .catch( error => console.log(error))

    }

    deleteCard(peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter( pelicula => pelicula.id !== peliculaABorrar );

        this.setState({
            peliculas: peliculasQueQuedan
        })
    }

    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas = this.state.peliculasIniciales.filter( (pelicula) => pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase()));

        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    render(){
            return(
                <React.Fragment>
                <main className= "cuerpo"> 
                        <div><Formulario filtrarPeliculas={(textoAFiltrar) => this.filtrarPeliculas(textoAFiltrar)} /> </div>  
                  
                  


                <button type="button">Cargar más tarjetas</button>
                <section className="card-container">
                {
                    this.state.peliculas.length !== 0?
                    this.state.peliculas.map((pelicula, idx)=> <Tarjetas info={pelicula} key={idx+pelicula.title} remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)} />):
                    <h2> CARGANDOOOO.... </h2>
                }
                </section>

            <button onClick={()=> this.addMore()}> Más películas </button>
            </main>
            </React.Fragment>
            )
        }

}

export default Peliculas;