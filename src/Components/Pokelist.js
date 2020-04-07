import React from 'react';
import Pokemon from './Pokemon';
import '../Stylesheets/Pokelist.css';

class Pokelist extends React.Component {
  render() {
    console.log(this.props.pokemons);
    return (
      <ul className="page__main--list">
        {this.props.pokemons.map((pokemon, index) => {
          return (
            <li className="page__main--card" key={index} id={pokemon.id}>
              <Pokemon pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Pokelist;
