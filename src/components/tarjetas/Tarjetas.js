import React, {Component} from 'react';
import  "./Tarjetas.css";


class Tarjetas extends Component {

    constructor(props){
        super(props)
        this.state = {

            
        }
    }

render(){
    return(
        <article className="tarjetas">
                     <section className="navigation">
                            <div>
                                <i className="fas fa-chevron-left"></i>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                            <i className="far fa-window-close"></i>
                        </section>
                        <main className="imagen">
                            <img src={`https://image.tmdb.org/t/p/w500${this.props.info.poster_path}`} alt="" />
                            <h3>{this.props.info.title}</h3>
                            <p className="description">{this.props.info.overview}</p>
                            <section className="aditional-info">
                                <p>Original Language: {this.props.info.original_language}</p>
                                <p>Rating: {this.props.info.vote_average}</p>
                                <p>Premiere: {this.props.info.release_date}</p>
                            </section>
                            <a href="">Ver más</a>
                        </main>
                    </article>
    )
    }
}

export default Tarjetas;
