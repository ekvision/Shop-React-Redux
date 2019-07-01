import { combineReducers } from "redux";
import cart from './cart';
import favorites from "./favorites";



export default combineReducers({
  addToCart: cart,
  favorites: favorites
})
