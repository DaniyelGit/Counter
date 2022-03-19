import React, {ChangeEvent, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCounterState} from "../redux/CounterReducer";
import {Counter} from "../components/Counter/Counter";
import {Settings} from "../components/Settings/Settings";
import {
    changeIsDoneSettingsAC,
    changeMinOrMaxValueAC,
    decreaseValueAC,
    increaseValueAC, resetCurrentValueAC,
    setIsErrorAC
} from "../redux/action";
import {useSpring} from "react-spring";


export const Container = () => {

    const {
        isDoneSettings,
        valueMin,
        valueMax,
        currentValue,
        isDisabled,
        isWarning,
    } = useSelector(selectCounterState)


    const dispatch = useDispatch();

    const resultIsDisabled = currentValue >= valueMax
        || valueMin < 0
        || valueMax < 0
        || valueMin > valueMax
        || valueMin === valueMax;

    useEffect(() => {
        if (resultIsDisabled) {
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

    const checkingForCorrectValue = valueMin > valueMax || valueMin < 0 || valueMax < 0 || valueMax === valueMin;

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
                dispatch(changeMinOrMaxValueAC(currentValueInput, valueMax))
            }
            if (trigger === 'max') {
                dispatch(changeMinOrMaxValueAC(valueMin, currentValueInput))
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

    const resetCurrentValue = useCallback(() => {
        dispatch(resetCurrentValueAC());
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
                    resetCurrentValue={resetCurrentValue}
                    isDisabled={isDisabled}
                    valueMin={valueMin}
                    valueMax={valueMax}
                    isWarning={isWarning}
                    checkingForCorrectValue={checkingForCorrectValue}
                />
                <Settings
                    transform={transform}
                    opacity={opacity}
                    valueMin={valueMin}
                    valueMax={valueMax}
                    isDisabled={isDisabled}
                    checkingForCorrectValue={checkingForCorrectValue}
                    changeIsDoneSettings={changeIsDoneSettings}
                    changeMaxOrMinValue={changeMaxOrMinValue}
                />
            </div>
        </div>
    );
};


