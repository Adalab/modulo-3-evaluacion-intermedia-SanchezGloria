import React from 'react';
import '../Stylesheets/App.css';
import Data from '../Data/Data.js';
import Pokelist from './Pokelist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      arrayFavs: [],
      className: '',
    };
    this.handleCard = this.handleCard.bind(this);
  }

  handleCard = (id) => {
    let clickedId = parseInt(id);
    // console.log(clickedId);
    let prevfavorites = this.state.arrayFavs;
    let favIndex = prevfavorites.indexOf(clickedId);
    if (favIndex === -1) {
      this.setState((prevState) => {
        return {
          arrayFavs: [...prevState.arrayFavs, clickedId],
        };
      });
    } else {
      prevfavorites.splice(favIndex, 1);
      this.setState({ arrayFavs: [...prevfavorites] });
    }
  };

  render() {
    // console.log(this.state.data);
    // console.log(this.state.arrayFavs);
    return (
      <div className="App">
        <header className="page__header">
          <h1 className="page__header--tittle">Mi lista de Pokemons</h1>
        </header>
        <main className="page__main">
          <Pokelist pokemons={this.state.data} arrayFavs={this.state.arrayFavs} handleCard={this.handleCard} />
        </main>
      </div>
    );
  }
}

export default App;
