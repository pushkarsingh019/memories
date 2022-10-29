import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";

// importing reducers
import postReducer from "./reducers/postReducer";
import authReducer from "./reducers/authReducers";

const reducers = combineReducers({
    posts : postReducer,
    user : authReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));



export default store;