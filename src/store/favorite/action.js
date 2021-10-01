import { FAVORITE_ADD } from "./actionType";

export function addFavorite(data) {
  const newFavorite = {
    type: FAVORITE_ADD,
    payload: `${data}`,
  };
  return newFavorite;
}
