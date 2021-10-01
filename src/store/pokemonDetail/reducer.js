import {
  POKEMON_ABILITIES,
  POKEMON_BIO,
  POKEMON_HEIGHT,
  POKEMON_WEIGHT,
  POKEMON_HP,
  POKEMON_ATTACK,
  POKEMON_DEFENSE,
  POKEMON_SPATTACK,
  POKEMON_SPDEFENSE,
  POKEMON_SPEED,
} from "./actionType";

const initialState = {
  pokeBio: "",
  pokeWeight: 0,
  pokeHeight: 0,
  pokeAbilities: [],
  HP: 0,
  Attack: 0,
  Defense: 0,
  SpAttack: 0,
  SpDefense: 0,
  Speed: 0
};

//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case POKEMON_BIO:
      return {
        ...state,
        pokeBio: action.payload,
      };
    case POKEMON_WEIGHT:
      return {
        ...state,
        pokeWeight: action.payload,
      };
    case POKEMON_HEIGHT:
      return {
        ...state,
        pokeHeight: action.payload,
      };
    case POKEMON_ABILITIES:
      return {
        ...state,
        pokeAbilities: action.payload,
      };
    case POKEMON_HP:
      return {
        ...state,
        HP: action.payload,
      };
    case POKEMON_ATTACK:
      return {
        ...state,
        Attack: action.payload,
      };
    case POKEMON_DEFENSE:
      return {
        ...state,
        Defense: action.payload,
      };
    case POKEMON_SPATTACK:
      return {
        ...state,
        SpAttack: action.payload,
      };
    case POKEMON_SPDEFENSE:
      return {
        ...state,
        SpDefense: action.payload,
      };
    case POKEMON_SPEED:
      return {
        ...state,
        Speed: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
