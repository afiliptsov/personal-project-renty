import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./ducks/userReducer";
import itemReducer from "./ducks/itemReducer";
import getItemReducer from "./ducks/getItemReducer";
import imageReducer from "./ducks/imageReducer";
import getImageByPostIdReducer from "./ducks/getImageByPostIdReducer";
import deleteItemReducer from "./ducks/deleteItemReducer";

const combinedReducers = combineReducers({
  user: userReducer,
  items: itemReducer,
  item: getItemReducer,
  images: imageReducer,
  storedImage: getImageByPostIdReducer,
  deleteItem: deleteItemReducer
});

const store = createStore(
  combinedReducers,
  applyMiddleware(promiseMiddleware())
);

export default store;
