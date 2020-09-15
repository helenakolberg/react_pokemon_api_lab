import React from 'react';

const PokeSelector = props => {

    const options = props.pokemons.map((pokemon) => {
        return (
        <option key={pokemon.name} value={pokemon}>{pokemon.name}</option>
        );
    });

    function handleChagne(event) {
        props.handlePokemonSelected(event.target.value);
    }

    return (
        <select id="pokemon-selector" onChange={handleChange}>
            <option disabled value="default">Choose a Pokemon</option>
            {options}
        </select>

    )
}

export default PokeSelector;

