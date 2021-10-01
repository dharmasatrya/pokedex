import {
  POKELIST_FETCH,
  URL_SET,
  NEXTURL_SET,
  PREVURL_SET,
  NAVIGATE_NEXT,
  NAVIGATE_PREV,
  POKEMON_SEARCH
} from "./actionType";

const initialState = {
  pokeData: [],
  url: "https://pokeapi.co/api/v2/pokemon?&limit=18",
  nextUrl: "",
  prevUrl: "",
};

//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case URL_SET:
      return {
        ...state,
        url: action.payload,
      };

    case POKELIST_FETCH:
      return {
        ...state,
        pokeData: action.payload,
      };
    case NEXTURL_SET:
      return {
        ...state,
        nextUrl: action.payload,
      };
    case PREVURL_SET:
      return {
        ...state,
        prevUrl: action.payload,
      };
    case NAVIGATE_NEXT:
      return {
        ...state,
        url: state.nextUrl,
      };
    case NAVIGATE_PREV:
      return {
        ...state,
        url: state.prevUrl,
      };
    case POKEMON_SEARCH:
      return {
        ...state,
        pokeData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
