import {
  POKELIST_FETCH,
  URL_SET,
  NEXTURL_SET,
  PREVURL_SET,
  NAVIGATE_NEXT,
  NAVIGATE_PREV,
  POKEMON_SEARCH,
} from "./actionType";

export function setPokeList(payload) {
  return {
    type: POKELIST_FETCH,
    payload,
  };
}

export function setUrl(payload) {
  return {
    type: URL_SET,
    payload,
  };
}

export function setNextUrl(payload) {
  return {
    type: NEXTURL_SET,
    payload,
  };
}

export function setPrevUrl(payload) {
  return {
    type: PREVURL_SET,
    payload,
  };
}

export function navigateNext() {
  return {
    type: NAVIGATE_NEXT,
  };
}

export function navigatePrev() {
  return {
    type: NAVIGATE_PREV,
  };
}

export function searchPokemon(payload) {
  return {
    type: POKEMON_SEARCH,
    payload,
  };
}

export function fetchPokemon() {
  return async function(dispatch, getState) {
    try {
      const result = await fetch(getState().pokemon.url);
      const data = await result.json();
      dispatch(setPokeList(data.results));
      dispatch(setNextUrl(data.next));
      dispatch(setPrevUrl(data.previous));
    } catch (error) {
      console.log(error);
    }
  };
}
