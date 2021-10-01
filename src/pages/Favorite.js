import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PokemonDetails from "../components/PokemonCards";

const Favorite = () => {
  const state = useSelector((state) => state);
  const [pokemonData, setPokemonData] = useState([]);

  const pokemonUrl = async () => {
    const result = state.favorite.favorite.map((obj) => {
      return { url: `https://pokeapi.co/api/v2/pokemon/${obj}` };
    });
    setPokemonData(result)
  };

  useEffect(() => {
      pokemonUrl()
  }, []);

  return (
    <>
    <h1 className="mainTitle">Favorites</h1>
      <div className="pokemonContainer">
        {pokemonData.map((obj, index) => {
          return (
            <div key={index}>
              <PokemonDetails data={obj}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorite;