import { FAVORITE_ADD } from "./actionType";

const initialState = {
  favorite: []
};

//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_ADD:
      for (let a = 0; a < state.favorite.length; a++) {
        if (state.favorite[a] === action.payload) {
          alert("already in favorite!");
          return state;
        }
      }
      const newState = {
        ...state,
        favorite: state.favorite.concat(action.payload),
      };
      return newState;
    default:
      return state;
  }
}

export default reducer;
