import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";


const rootReducer = combineReducers({
    counter: CounterReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);