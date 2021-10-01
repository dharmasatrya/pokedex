import React, { useState, useEffect } from "react";
import "../App.css";
import TypeColors from "../constants/TypeColors";
import "../Loader.css";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"
import {addFavorite} from "../store/favorite/action"
import {StarIcon, InfoIcon} from "./Icon";

const PokemonDetails = ({ data }) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    try {
      const url = data.url;

      const result = await fetch(url);
      setIsNotFound(false);
      const details = await result.json();

      setPokemonData(details);
    } catch (error) {
      setIsNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const detailsBtn = (id) => {
    history.push(`/pokemon/${id}`);
  };

  function addToFavorite(id){
    dispatch(addFavorite(id))
  }

  useEffect(() => {
    getDetails();
  }, [data]);

  if (isNotFound) {
    return <h1>not found</h1>;
  }

  return (
    <>
      {isLoading === true ? (
        <div className="pokemon" />
      ) : (
        <div
          className="pokemonCard"
          style={{
            backgroundColor: TypeColors[pokemonData.types[0].type.name],
          }}
        >
          <div style={{width: "100%"}}>
            <div className="optionsDiv">
              <a 
              href="#"
              onClick={() => addToFavorite(pokemonData.id)}
              ><StarIcon/></a>
              <a
              href="#"
              onClick={() => detailsBtn(pokemonData.id)}
              ><InfoIcon/></a>
            </div>
            <div>
              {pokemonData.id > 99 ? (
                <p>#{pokemonData.id}</p>
              ) : (
                <p>#0{pokemonData.id}</p>
              )}

              <p>
                {pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}
              </p>
              <div className="imageContainer">
                <img
                  className="pokemonImage"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
                  alt={"fetching"}
                />
              </div>
              <p>Type: {pokemonData.types[0].type.name}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;