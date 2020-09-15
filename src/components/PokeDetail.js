import React from 'react';

const PokeDetail = (props) => {
    if (!props.pokemon) {
        return null;
    }

    return <h3>{props.pokemon}</h3>
}

export default PokeDetail;