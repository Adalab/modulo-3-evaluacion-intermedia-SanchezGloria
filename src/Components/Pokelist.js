import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import '../Stylesheets/Pokelist.css';

class Pokelist extends React.Component {
  constructor(props) {
    super(props);
    this.styleFav = '';
  }
  handleCardClick = (ev) => {
    // console.log(ev.currentTarget.id);
    this.props.handleCard(ev.currentTarget.id);
  };
  render() {
    // console.log(this.props.pokemons);
    return (
      <ul className="page__main--list">
        {this.props.pokemons.map((pokemon, index) => {
          if (this.props.arrayFavs.includes(pokemon.id)) {
            this.styleFav = 'favorite';
          } else {
            this.styleFav = '';
          }
          return (
            <li className={`page__main--card ${this.styleFav}`} key={index} id={pokemon.id} onClick={this.handleCardClick}>
              <Pokemon pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
    );
  }
}

Pokelist.propTypes = {
  pokemons: PropTypes.array,
};

export default Pokelist;
