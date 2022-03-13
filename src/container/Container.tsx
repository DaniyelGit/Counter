import React, {ChangeEvent, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, selectCounterState} from "../redux/CounterReducer";
import {Counter} from "../components/Counter/Counter";
import {Settings} from "../components/Settings/Settings";
import {
    changeIsDoneSettingsAC,
    changeMinOrMaxValue,
    decreaseValueAC,
    increaseValueAC,
    setIsErrorAC
} from "../redux/action";
import {useSpring} from "react-spring";
import {RootReducerType} from "../redux/store";


export const Container = () => {

    const {
        isDoneSettings,
        valueMin,
        valueMax,
        currentValue,
        isDisabled,
    } = useSelector(selectCounterState)


    const dispatch = useDispatch();


    useEffect(() => {
        if (currentValue >= valueMax || valueMin < 0 || valueMax < 0 || valueMin >= valueMax || valueMin === valueMax) {
            dispatch(setIsErrorAC(true));
        }
        else {
            dispatch(setIsErrorAC(false));
        }
    }, [currentValue, valueMin, valueMax])


    const {transform, opacity} = useSpring({
        opacity: isDoneSettings ? 1 : 0,
        transform: `perspective(600px) rotateY(${isDoneSettings ? 180 : 0}deg)`,
        config: {mass: 5, tension: 300, friction: 100}
    });

    const changeIsDoneSettings = useCallback( (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.dataset.button === 'on'
            ? dispatch(changeIsDoneSettingsAC(true))
            : dispatch(changeIsDoneSettingsAC(false));
    }, [dispatch])


    const changeMaxOrMinValue = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.dataset.input) {
            const currentValueInput: number = +e.currentTarget.value;
            const trigger: string = e.currentTarget.dataset.input;
            if (trigger === 'min') {
                dispatch(changeMinOrMaxValue(currentValueInput, valueMax))
            }
            if (trigger === 'max') {
                dispatch(changeMinOrMaxValue(valueMin, currentValueInput))
            }
        }
    }, [valueMin, valueMax])

    const changeCurrentValue = useCallback( (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.dataset.button) {
            const trigger: string = e.currentTarget.dataset.button;
            trigger === 'inc'
                ? dispatch(increaseValueAC())
                : dispatch(decreaseValueAC())
        }
    }, [dispatch])


    return (
        <div className="App">
            <div className="wrap">
                <Counter
                    currentValue={currentValue}
                    transform={transform}
                    opacity={opacity}
                    changeIsDoneSettings={changeIsDoneSettings}
                    changeCurrentValue={changeCurrentValue}
                    isDisabled={isDisabled}
                />
                <Settings
                    transform={transform}
                    opacity={opacity}
                    valueMin={valueMin}
                    valueMax={valueMax}
                    changeIsDoneSettings={changeIsDoneSettings}
                    changeMaxOrMinValue={changeMaxOrMinValue}
                />
            </div>
        </div>
    );
};


