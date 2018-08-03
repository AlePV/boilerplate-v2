import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"; // put third-party imports first
import authReducer from "../reducers/auth";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};