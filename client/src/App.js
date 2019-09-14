import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

function Test() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/gengar`)
      .then(res => res.json())
      .then(res => {
        setPokemon(res)
      });
  }, [])
  return (
    <div className="container">
      {pokemon ?
        <>
          <div className="pokeHolder">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} />
          </div>

        </> :
        <h2>Loading...</h2>}
    </div>
  )
}

export default App;
