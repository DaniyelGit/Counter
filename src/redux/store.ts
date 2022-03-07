import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({

});

export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);