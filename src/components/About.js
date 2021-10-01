import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PokemonAbout = () => {
  const state = useSelector((state) => state);

  return (
    <>
      {state.pokemonDetail.pokeBio ? (
        <p>Bio: {state.pokemonDetail.pokeBio}</p>
      ) : (
        "loading"
      )}
      <p>Weight: {state.pokemonDetail.pokeWeight / 10} kg</p>
      <p>Height: {state.pokemonDetail.pokeHeight * 10} cm</p>
      <p>Abilities: {state.pokemonDetail.pokeAbilities.join(", ")}.</p>
    </>
  );
};

export default PokemonAbout;
