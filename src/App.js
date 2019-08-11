import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonName: "",
      pokemonImage: ""
    };
  }

  async componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 807) + 1;
    const url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber + "/";
    const response = await fetch(url);
    const data = await response.json();
    
    this.setState({ 
      pokemonName: data.name, 
      pokemonImage: data.sprites.front_default
    });
}

render() {
  return (
      <div className="pokemonBox">
          <img src={this.state.pokemonImage} alt="pokemon" />
          <span>{this.state.pokemonName}</span>
      </div> 
  )
}
}

export default App;
