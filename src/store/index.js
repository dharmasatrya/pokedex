import {applyMiddleware, createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
// import reducer from "./reducer"
import favoriteReducer from "./favorite/reducer"
import pokemonReducer from "./pokemonData/reducer"
import pokemonDetailsReducer from "../store/pokemonDetail/reducer"

// const store = createStore(reducer, applyMiddleware(thunk))

const store = createStore(
combineReducers({
    favorite: favoriteReducer,
    pokemon: pokemonReducer,
    pokemonDetail: pokemonDetailsReducer
})    
, applyMiddleware(thunk))

export default store