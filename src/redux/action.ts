export enum ACTIONS_TYPE {
    CHANGE_IS_DONE_SETTINGS = 'ButtonSet/ChangeIsDoneSettings',
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
    }
}










export type CounterReducersTypes = changeIsDoneSettingsACType;