import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";
import {loadState, saveState} from "../localStorage/localStorage-utils";


const rootReducer = combineReducers({
    counter: CounterReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;


// localStorage

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
})

