import React, {Component} from 'react';

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
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
               <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placehoder='buscar'/>
            </form>
        </div>
        )
    }

}

export default Formulario;