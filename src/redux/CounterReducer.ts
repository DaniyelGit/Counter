

const initialState = {
    isDoneSettings: false,
    currentValue: '0',
    valueMin: '',
    valueMax: '',
}

type initialStateType = typeof initialState;

export const CounterReducer = (state: initialStateType = initialState, action: GeneralTypeForReducer) => {
    switch (action.type) {





        default: {
            return state;
        }
    }
}













export type GeneralTypeForReducer = {
    type: string,
    [key: string]: any
};