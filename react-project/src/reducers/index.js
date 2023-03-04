import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import app from './app';
export default function createReducer(asyncReducer) {
    return combineReducers({
        routing: routerReducer,
        app,
        ...asyncReducer
    });
}