import React from 'react';

class Pokemon extends React.Component {
  render() {
    console.log(this.props.pokemon);

    return (
      <>
        <img src={this.props.pokemon.url} alt={this.props.pokemon.name} title={this.props.pokemon.name} />
        <h2 className="card__title">{this.props.pokemon.name}</h2>
        <ul className="card__types">
          {this.props.pokemon.types.map((type) => {
            return <li className="card__type">{type}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Pokemon;
