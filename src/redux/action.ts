export enum ACTIONS_TYPE {
    CHANGE_IS_DONE_SETTINGS = 'Button/ChangeIsDoneSettings',
    CHANGE_CURRENT_VALUE = 'Button/ChangeCurrentValue',
    CHANGE_MIN_OR_MAX_VALUE = 'InputBlock/ChangeInputValueForSet',
}


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
    } as const
}

type changeCurrentValueACType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_VALUE,
    payload: {
        currentValue: string
    }
}

export const changeCurrentValueAC = (currentValue: string) : changeCurrentValueACType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_VALUE,
        payload: {
            currentValue,
        }
    } as const
}

type changeMinOrMaxValueAC = {
    type: ACTIONS_TYPE.CHANGE_MIN_OR_MAX_VALUE,
    payload: {
        valueMin: number
        valueMax: number
    }
}

export const changeMinOrMaxValue = (valueMin: string, valueMax: string) => {
    return {
        type: ACTIONS_TYPE.CHANGE_MIN_OR_MAX_VALUE,
        payload: {
            valueMin,
            valueMax,
        }
    } as const
}









export type CounterReducersTypes = changeIsDoneSettingsACType
    | changeCurrentValueACType
    | changeMinOrMaxValueAC;