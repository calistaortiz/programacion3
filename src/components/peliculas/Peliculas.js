import React, { Component } from "react";
import Tarjetas from "../tarjetas/Tarjetas";
import "./Peliculas.css";
import Header from "../header/Header";

class Peliculas extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      peliculasIniciales: [],
      isLoaded: false,
      nextUrl: "",
      peliculaClase: "tarjetaPelicula",
    };
  }

  componentDidMount() {
    console.log("peliculas");
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=c6008cb55dc77f123f073cb070c2193b&language=en-US&page=1";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          peliculas: data.results,
          peliculasIniciales: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  addMore() {
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=c6008cb55dc77f123f073cb070c2193b&language=en-US&page=" +
      this.state.nextUrl +
      1;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          nextUrl: data.page,
        });
      })
      .catch((error) => console.log(error));
  }

  deleteCard(peliculaABorrar) {
    let peliculasQueQuedan = this.state.peliculas.filter(
      (pelicula) => pelicula.id !== peliculaABorrar
    );

    this.setState({
      peliculas: peliculasQueQuedan,
    });
  }

  filtrarPeliculas(textoAFiltrar) {
    let peliculasFiltradas = this.state.peliculasIniciales.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase())
    );

    this.setState({
      peliculas: peliculasFiltradas,
    });
  }
  horizontal() {
    this.setState({
      peliculaClase: "tarjetaRow",
    });
  }
  vertical() {
    this.setState({
      peliculaClase: "tarjetaPelicula",
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          filtrarPeliculas={(textoAFiltrar) =>
            this.filtrarPeliculas(textoAFiltrar)
          }
        />

        <main className="cuerpo">
        <div className='orden'> 
          <i
            className="fas fa-th"
            onClick={() => this.vertical()}
          />
          <i
            className="fas fa-align-justify"
            onClick={() =>
              this.horizontal()}
          />
        </div>

          <section className="card-container">
            {this.state.peliculas.length !== 0 ? (
              this.state.peliculas.map((pelicula, idx) => (
                <Tarjetas
                  clase={this.state.peliculaClase}  
                  info={pelicula}
                  key={idx + pelicula.title}
                  remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)}
                />
              ))
            ) : (
              //  <div className="loader"></div>
              <h2>No hay datos que coincidan con su búsqueda</h2>
            )}
          </section>

          <div>
            <button className="botonAgregar" onClick={() => this.addMore()}>
              {" "}
              Más películas{" "}
            </button>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Peliculas;
