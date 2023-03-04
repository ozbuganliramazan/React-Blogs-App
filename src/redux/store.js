import { createStore, combineReducers } from "redux";

import blogsReducer from "./reducers/blogsReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import loginReducer from "./reducers/loginReducer";
import usersReducer from "./reducers/usersReducer";


const rootReducer=combineReducers({
    blogsState:blogsReducer,
    categoriesState:categoriesReducer,
    usersState:usersReducer,
    loginState:loginReducer
})

const store=createStore(rootReducer)

export default store