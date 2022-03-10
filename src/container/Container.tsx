import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCounterState} from "../redux/CounterReducer";
import {Counter} from "../components/Counter/Counter";
import {Settings} from "../components/Settings/Settings";
import {changeIsDoneSettingsAC, changeMinOrMaxValue, decreaseValueAC, increaseValueAC} from "../redux/action";
import {useSpring} from "react-spring";


export const Container = () => {

    const {
        isDoneSettings,
        valueMin,
        valueMax,
        currentValue,
    } = useSelector(selectCounterState)

    const dispatch = useDispatch();

    const min = valueMin;
    const max = valueMax;

    const { transform, opacity} = useSpring({
        opacity: isDoneSettings ? 1 : 0,
        transform: `perspective(600px) rotateY(${isDoneSettings ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 100 }
    });

    const changeIsDoneSettings = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.dataset.button === 'on'
            ? dispatch(changeIsDoneSettingsAC(true))
            : dispatch(changeIsDoneSettingsAC(false));
    }


    const changeMaxOrMinValue = (e: ChangeEvent<HTMLInputElement>) => {
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
    }

    const changeCurrentValue = (e: React.MouseEvent<HTMLButtonElement>) => {
        debugger;
        if (e.currentTarget.dataset.button) {
            const trigger: string = e.currentTarget.dataset.button;
           if (trigger === 'inc') {
               if (currentValue < valueMax) {
                   dispatch(increaseValueAC())
               }
           }
           else {
               dispatch(decreaseValueAC());
           }
        }
    }



    return (
        <div className="App">
            <div className="wrap">
                <Counter
                    currentValue={currentValue}
                    transform={transform}
                    opacity={opacity}
                    changeIsDoneSettings={changeIsDoneSettings}
                    changeCurrentValue={changeCurrentValue}
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


