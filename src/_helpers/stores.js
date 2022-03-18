import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "../_reducer/users.reducer";


const store = createStore(
    usersReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
export default store