import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fetchPokemon, navigateNext, navigatePrev, searchPokemon} from "../store/pokemonData/action"
import PokemonDetails from "../components/PokemonCards";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch()

  const debounce = (func) => {
    let timer;
    return function (...args){
      const context = this;
      if(timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, 500);
    }
  }

  const handleChange = (e) => {
    if(e.target.value === ""){
      dispatch(fetchPokemon())
    }else{
      const result = [{ url: `https://pokeapi.co/api/v2/pokemon/${e.target.value}`}]
      dispatch(searchPokemon(result))
    }
  }

  const optimisedVersion = useCallback(debounce(handleChange), [])

  const nextBtn = () => {
    dispatch(navigateNext())
  }

  const prevBtn = () => {
    dispatch(navigatePrev())
  }


  useEffect(() => {
    dispatch(fetchPokemon())
  }, [state.pokemon.url])

  return (
    <>
      <div>
        <h1 className="mainTitle">Pokedex</h1>
      </div>
      <div className="searchBar">
        <input className="searchBox" type="text" placeholder="Search with name or id" onChange={optimisedVersion}/>
      </div>
      <div className="pokemonContainer">
        {state.pokemon.pokeData.map((obj, index) => {
          return (
            <div key={index}>
              <PokemonDetails data={obj}/>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        {state.pokemon.prevUrl === null ? (
          <div />
        ) : (
          <button
            onClick={() => {
              prevBtn();
            }}
            className="button"
          >
            prev
          </button>
        )}
        <button
          onClick={() => {
            nextBtn();
          }}
          className="button"
        >
          next
        </button>
      </div>
    </>
  );
}

export default Home;
