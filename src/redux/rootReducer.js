import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import counterReducer from "./counter/counterReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    counter:counterReducer,
    dynamicCounter:dynamicCounterReducer
})

export default rootReducer;