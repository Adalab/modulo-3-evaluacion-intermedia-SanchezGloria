import React from 'react';
import '../Stylesheets/Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.pokemon.url} alt={this.props.pokemon.name} title={this.props.pokemon.name} />
        <h2 className="card__title">{this.props.pokemon.name}</h2>
        <ul className="card__types">
          {this.props.pokemon.types.map((type, index) => {
            return (
              <li key={index} className="card__type">
                {type}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
};

export default Pokemon;
