import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonCards";
import { Tab, Tabs } from "react-bootstrap";
import PokemonAbout from "../components/About";
import { getPokemonAbout, getPokemonDescription } from "../store/pokemonDetail/action";
import { useDispatch } from "react-redux";
import PokemonBaseStats from "../components/BaseStats";

const Details = () => {
  const { pokeId } = useParams();
  const [key, setKey] = useState("about");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonDescription(pokeId));
  }, []);

  useEffect(() => {
    dispatch(getPokemonAbout(pokeId));
  }, []);

  return (
    <>
      <h1 className="mainTitle">Details</h1>
      <div className="detailContainer">
        <div>
          <PokemonDetails
            data={{ url: `https://pokeapi.co/api/v2/pokemon/${pokeId}` }}
          ></PokemonDetails>
        </div>
        <div>
          <div
            className="detailsDiv"
          >
            <div>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(e) => setKey(e)}
                className="mb-3"
              >
                <Tab eventKey="about" title="About">
                </Tab>
                <Tab eventKey="baseStat" title="Base Stats">
                </Tab>
                <Tab eventKey="evolution" title="Evolution">
                </Tab>
                <Tab eventKey="moves" title="Moves">
                </Tab>
              </Tabs>
            </div>
            <div>
              {key == "about" ? <PokemonAbout></PokemonAbout> : <p></p>}
              {key == "baseStat" ? <PokemonBaseStats></PokemonBaseStats> : <p></p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
