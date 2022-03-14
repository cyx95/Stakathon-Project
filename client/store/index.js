import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import trails from "./trails";
import parks from "./parks";
import bearTrails from "./bearTrails";
import minnewaskaTrails from "./minnewaskaTrails";
import hudsonTrails from "./hudsonTrails";
import singlePark from "./singlePark";
import parkTrails from "./parkTrails";

const reducer = combineReducers({
  auth,
  trails,
  parks,
  bearTrails,
  minnewaskaTrails,
  hudsonTrails,
  singlePark,
  parkTrails
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
