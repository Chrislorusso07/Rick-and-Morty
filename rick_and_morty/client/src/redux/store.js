import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducer from "./Reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancer(applyMiddleware(thunkMiddleware)));


export default store;