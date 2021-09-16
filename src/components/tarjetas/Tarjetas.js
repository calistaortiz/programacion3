import React, {Component} from 'react';
import  "./Tarjetas.css";


class Tarjetas extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: "Ver más",
            viewMore: false
        }
    }

    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text:'Ver más',
            })
        }else{
            this.setState({
                
                viewMore: true,
                text: 'Ver menos',
            })
        }
    }

render(){
    return(
        <div className="tarjetaPelicula">
                            
                            <img src={`https://image.tmdb.org/t/p/w500${this.props.info.poster_path}`} alt="" />
                        <div className="ordenRow">
                            <h3><strong>{this.props.info.title}</strong></h3>
                            <p className="description"> <strong> <u> Descripción</u>: </strong> {this.props.info.overview}</p>
                            <section className={`${this.state.viewMore ? 'aditional-info-show': 'aditional-info'}`}>
                                <p> <strong> <u> Lenguaje original</u>: </strong> {this.props.info.original_language}</p>
                                <p> <strong> <u> Rating</u>: </strong> {this.props.info.vote_average}</p>
                                <p> <strong> <u> Fecha de estreno</u>:</strong> {this.props.info.release_date}</p>
                            </section>
                            <button className='more' onClick={ () => this.viewMore()} >{this.state.text}</button>
                            <button className='remove' onClick={()=> this.props.remove(this.props.info.id)}> borrar</button>
                        </div>
        </div>
                    
    )
    }
}

export default Tarjetas;
