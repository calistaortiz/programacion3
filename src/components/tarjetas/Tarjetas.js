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
        <div className="tarjetaPelicula">
                            
                            <img src={`https://image.tmdb.org/t/p/w500${this.props.info.poster_path}`} alt="" />
                            <h3>{this.props.info.title}</h3>
                            <p className="description">{this.props.info.overview}</p>
                            <section className="aditional-info">
                                <p>Original Language: {this.props.info.original_language}</p>
                                <p>Rating: {this.props.info.vote_average}</p>
                                <p>Premiere: {this.props.info.release_date}</p>
                                <button className='more' onClick={()=> this.props.remove(this.props.info.id)}> borrar</button>
                            </section>
                            <a href="">Ver más</a>
                        </div>
                    
    )
    }
}

export default Tarjetas;
