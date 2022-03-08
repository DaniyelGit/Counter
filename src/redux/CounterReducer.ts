import {ACTIONS_TYPE, CounterReducersTypes} from "./action";
import {RootReducerType} from "./store";


const initialState = {
    isDoneSettings: false,
    currentValue: '0',
    valueMin: '',
    valueMax: '',
}

type initialStateType = typeof initialState;

export const CounterReducer = (state: initialStateType = initialState, action: CounterReducersTypes) => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_IS_DONE_SETTINGS: {
            return {
                ...state,
                ...action.payload
            }
        }




        default: {
            return state;
        }
    }
}

export const selectCounterState = (store: RootReducerType) => store.counter;













