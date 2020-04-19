import React from 'react';
import '../Stylesheets/App.css';
import Data from '../Data/Data.js';
import Pokelist from './Pokelist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="page__header">
          <h1 className="page__header--tittle">Mi lista de Pokemons</h1>
        </header>
        <main className="page__main">
          <Pokelist pokemons={this.state.data} />
        </main>
      </div>
    );
  }
}

export default App;
