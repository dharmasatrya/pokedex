import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"

const PokemonBaseStats = () => {
  const state = useSelector((state) => state);

  return (
    <>
    <p>HP: {state.pokemonDetail.HP}</p>
    <p>Attack: {state.pokemonDetail.Attack}</p>
    <p>Defense: {state.pokemonDetail.Defense}</p>
    <p>Sp. Attack: {state.pokemonDetail.SpAttack}</p>
    <p>Sp. Defense: {state.pokemonDetail.SpDefense}</p>
    <p>Speed: {state.pokemonDetail.Speed}</p>
    </>
  );
};

export default PokemonBaseStats;