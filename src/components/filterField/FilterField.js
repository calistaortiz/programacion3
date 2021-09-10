import React, {Component} from 'react';

class FilterField extends Component{
    constructor(){
        super();
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
        }, () => this.props.filtrarPeliculas(this.state.filterBy))
        
    }

    render(){
        return(
            <form action="" onSubmit={(evento)=>this.evitarSubmit(evento)}>
                <input type="text" onChange={(a)=>this.controlarCambios(a)} value={this.state.filterBy} placehoder='ingrese su nombre'/>
            </form>
        )
    }

}

export default FilterField;