import React from 'react';

const PokeSelector = props => {

    const pokemonOptions = props.pokemons.map((pokemon) => {
        return (
        <option key={pokemon.name} value={pokemon}>{pokemon.name}</option>
        );
    });

}