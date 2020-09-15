import React, { Component } from 'react';
import PokeSelector from '../components/PokeSelector';

class PokeContainer extends Component {

    constructor() {
        super();
        this.state = {
            pokemons: [],
            selectedPokemon: ''
        }
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.results.forEach(pokemon => {
                    fetch(pokemon.url)
                        .then(res => res.json())
                        .then(pokeData => this.setState(prevState => {
                            const updatedPokemons = [...prevState.pokemons, pokeData];
                            return { pokemons: updatedPokemons }
                        }))
                })
            })
            .catch(err => console.log(err));
    }

    
    render() {
        return(
            <>
            <PokeSelector pokemons={this.state.pokemons} />

            </>
        )
    }


}


export default PokeContainer;