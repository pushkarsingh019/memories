import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";

// importing reducers
import postReducer from "./reducers/postReducer";

const reducers = combineReducers({
    posts : postReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));



export default store;