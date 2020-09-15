import React, { Component } from 'react';
import PokeSelector from '../components/PokeSelector';
import PokeDetail from '../components/PokeDetail.js';

class PokeContainer extends Component {

    constructor() {
        super();

        this.state = {
            pokemons: [],
            selectedPokemon: ''
        }

        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
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

    handlePokemonSelected(pokemon) {
        this.setState({ selectedPokemon: pokemon });
    }

    
    render() {
        return(
            <>
            <PokeSelector pokemons={this.state.pokemons} handlePokemonSelected={this.handlePokemonSelected}/>
            <PokeDetail pokemon={this.state.selectedPokemon} />
            </>
        )
    }


}


export default PokeContainer;