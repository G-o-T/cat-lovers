import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catReducer from "./reducers/CatSlice";
import testReducer from "./reducers/TestSlice";

const rootReducer = combineReducers({
    catReducer,
    testReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}