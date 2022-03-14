import {ACTIONS_TYPE, CounterReducersTypes} from "./action";
import {RootReducerType} from "./store";


export type initialStateType = typeof initialState;

const initialState = {
    isDoneSettings: false,
    currentValue: 0,
    valueMin: 0,
    valueMax: 0,
    isDisabled: false,
}


export const CounterReducer = (state: initialStateType = initialState, action: CounterReducersTypes) => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREASE_CURRENT_VALUE: {
            return {
                ...state,
                currentValue: state.currentValue + 1,
            }
        }
        case ACTIONS_TYPE.DECREASE_CURRENT_VALUE: {
            return {
                ...state,
                currentValue: state.currentValue - 1,
            }
        }
        case ACTIONS_TYPE.CHANGE_IS_DONE_SETTINGS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ACTIONS_TYPE.CHANGE_MIN_OR_MAX_VALUE: {
            return  {
                ...state,
                ...action.payload,
                currentValue: action.payload.valueMin,
            }
        }
        case ACTIONS_TYPE.RESET_CURRENT_VALUE: {
            return {
                ...state,
                currentValue: state.valueMin,
            }
        }
        case ACTIONS_TYPE.SET_IS_ERROR: {
            return  {
                ...state,
                ...action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export const selectCounterState = (store: RootReducerType) => store.counter;













