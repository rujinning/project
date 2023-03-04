import { legacy_createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
// import { autoRehydrate } from 'redux-persist';
import RootSaga from './sagas';
import createReducer from "./reducers";
const sagaMiddleware = createSagaMiddleware();
let store;
export function getState() {
    return store;
};
export default function configureStore(initialState = {}) {
    store = legacy_createStore(
        createReducer(),
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            // autoRehydrate(),
            window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : (f) => f
        )
    );
    sagaMiddleware.run(RootSaga);
    store.asyncReducers = {};
    return store;
};