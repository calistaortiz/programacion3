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
                text:'Ver más',
                viewMore: false
            })
        }else{
            this.setState({
                text: 'Ver menos',
                viewMore: true,
            })
        }
    }

render(){
    return(
        <div className="tarjetaPelicula">
                            
                            <img src={`https://image.tmdb.org/t/p/w500${this.props.info.poster_path}`} alt="" />
                            <h3>{this.props.info.title}</h3>
                            <p className="description">DESCRIPCIÓN: {this.props.info.overview}</p>
                            <section className="aditional-info">
                                <p >ORIGINAL LANGUAGE: {this.props.info.original_language}</p>
                                <p className={` ${this.state.viewMore ? 'show' : 'hide'}`}>RATING: {this.props.info.vote_average}</p>
                                <p className={ this.state.viewMore ? '' : 'hide' }>PREMIERE: {this.props.info.release_date}</p>
                                <button className='remove' onClick={()=> this.props.remove(this.props.info.id)}> borrar</button>
                            </section>
                            <button className='more' onClick={ () => this.viewMore()} >{this.state.text}</button>
                        </div>
                    
    )
    }
}

export default Tarjetas;
