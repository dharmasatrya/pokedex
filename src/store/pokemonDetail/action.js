import {
  POKEMON_BIO,
  POKEMON_HEIGHT,
  POKEMON_WEIGHT,
  POKEMON_ABILITIES,
  POKEMON_HP,
  POKEMON_ATTACK,
  POKEMON_DEFENSE,
  POKEMON_SPATTACK,
  POKEMON_SPDEFENSE,
  POKEMON_SPEED
} from "./actionType";

export function setPokemonBio(payload) {
  return {
    type: POKEMON_BIO,
    payload,
  };
}

export function setPokemonWeight(payload) {
  return {
    type: POKEMON_WEIGHT,
    payload,
  };
}

export function setPokemonHeight(payload) {
  return {
    type: POKEMON_HEIGHT,
    payload,
  };
}

export function setPokemonAbilities(payload) {
  return {
    type: POKEMON_ABILITIES,
    payload,
  };
}

export function setPokemonHP(payload) {
  return {
    type: POKEMON_HP,
    payload,
  };
}

export function setPokemonAttack(payload) {
  return {
    type: POKEMON_ATTACK,
    payload,
  };
}

export function setPokemonDefense(payload) {
  return {
    type: POKEMON_DEFENSE,
    payload,
  };
}

export function setPokemonSpAttack(payload) {
  return {
    type: POKEMON_SPATTACK,
    payload,
  };
}

export function setPokemonSpDefense(payload) {
  return {
    type: POKEMON_SPDEFENSE,
    payload,
  };
}

export function setPokemonSpeed(payload) {
  return {
    type: POKEMON_SPEED,
    payload,
  };
}

export function getPokemonAbout(id) {
  return async function(dispatch, getState) {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const data = await result.json();
      const abilities = []
      dispatch(setPokemonWeight(data.weight))
      dispatch(setPokemonHeight(data.height))
      data.abilities.forEach((el) => {
        return abilities.push(el.ability.name)
      })
      dispatch(setPokemonAbilities(abilities))
      dispatch(setPokemonHP(data.stats[0].base_stat))
      dispatch(setPokemonAttack(data.stats[1].base_stat))
      dispatch(setPokemonDefense(data.stats[2].base_stat))
      dispatch(setPokemonSpAttack(data.stats[3].base_stat))
      dispatch(setPokemonSpDefense(data.stats[4].base_stat))
      dispatch(setPokemonSpeed(data.stats[5].base_stat))
    } catch (error) {
      console.log(error)
    }
  };
}

export function getPokemonDescription(id) {
  return async function(dispatch, getState) {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const data = await result.json();
      dispatch(setPokemonBio(data.flavor_text_entries[0].flavor_text))
    } catch (error) {
      console.log(error)
    }
  };
}
