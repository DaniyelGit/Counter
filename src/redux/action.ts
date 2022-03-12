export enum ACTIONS_TYPE {
    CHANGE_IS_DONE_SETTINGS = 'Button/ChangeIsDoneSettings',
    CHANGE_MIN_OR_MAX_VALUE = 'InputBlock/ChangeInputValueForSet',
    INCREASE_CURRENT_VALUE = 'Counter/Button/increaseValue',
    DECREASE_CURRENT_VALUE = 'Counter/Button/decreaseValue',
    SET_IS_ERROR = 'App/Container/useEffect',
}


export type CounterReducersTypes = changeIsDoneSettingsACType
    | changeMinOrMaxValueAC
    | increaseValueAC
    | decreaseValueAC
    | setIsErrorAC;



type changeIsDoneSettingsACType = {
    type: ACTIONS_TYPE.CHANGE_IS_DONE_SETTINGS,
    payload: {
        isDoneSettings: boolean
    }
}

export const changeIsDoneSettingsAC = (isDoneSettings: boolean) : changeIsDoneSettingsACType => {
    return {
        type: ACTIONS_TYPE.CHANGE_IS_DONE_SETTINGS,
        payload: {
            isDoneSettings
        }
    }
}

type changeMinOrMaxValueAC = {
    type: ACTIONS_TYPE.CHANGE_MIN_OR_MAX_VALUE,
    payload: {
        valueMin: number
        valueMax: number
    }
}

export const changeMinOrMaxValue = (valueMin: number, valueMax: number): changeMinOrMaxValueAC => {
    return {
        type: ACTIONS_TYPE.CHANGE_MIN_OR_MAX_VALUE,
        payload: {
            valueMin,
            valueMax,
        }
    }
}

type increaseValueAC = {
    type: ACTIONS_TYPE.INCREASE_CURRENT_VALUE
}

export const increaseValueAC = () : increaseValueAC => {
    return {
        type: ACTIONS_TYPE.INCREASE_CURRENT_VALUE,
    }
}


type decreaseValueAC = {
    type: ACTIONS_TYPE.DECREASE_CURRENT_VALUE
}

export const decreaseValueAC = () : decreaseValueAC => {
    return {
        type: ACTIONS_TYPE.DECREASE_CURRENT_VALUE,
    }
}

type setIsErrorAC = {
    type: ACTIONS_TYPE.SET_IS_ERROR,
    payload: {
        isDisabled: boolean
    }
}

export const setIsErrorAC = (isDisabled: boolean): setIsErrorAC => {
    return {
        type: ACTIONS_TYPE.SET_IS_ERROR,
        payload: {
            isDisabled,
        }
    }
}



