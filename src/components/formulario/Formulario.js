import React, {Component} from 'react';
import '../header/Header.css'

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state ={
             filterBy:''
        }
    }
    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.filterBy)
        
    );
    }

    render(){
        return(
         <div className='buscar'>  
            <form name='search' placeholder='buscar' onSubmit={(event)=>this.evitarSubmit(event)}>
               <input type="text" name="search" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder=' Buscar'/>
            </form>
        </div>
        )
    }

}

export default Formulario;