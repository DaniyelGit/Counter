import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCounterState} from "../redux/CounterReducer";
import {Counter} from "../components/Counter/Counter";
import {Settings} from "../components/Settings/Settings";
import {changeIsDoneSettingsAC, changeMinOrMaxValue} from "../redux/action";
import {useSpring} from "react-spring";


export const Container = () => {

    const {
        isDoneSettings,
        valueMin,
        valueMax,
        currentValue,
    } = useSelector(selectCounterState)

    const dispatch = useDispatch();

    const { transform, opacity} = useSpring({
        opacity: isDoneSettings ? 1 : 0,
        transform: `perspective(600px) rotateY(${isDoneSettings ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 100 }
    });

    const changeIsDoneSettings = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.dataset.settings === 'on'
            ? dispatch(changeIsDoneSettingsAC(true))
            : dispatch(changeIsDoneSettingsAC(false));
    }


    const changeMaxOrMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.dataset.input) {
            const trigger: string = e.currentTarget.dataset.input;
            if (trigger === 'min') {
                const currentMinValue = e.currentTarget.value;
                dispatch(changeMinOrMaxValue(currentMinValue, valueMax))
            }
            if (trigger === 'max') {
                const currentMaxValue = e.currentTarget.value;
                dispatch(changeMinOrMaxValue(valueMin, currentMaxValue))
            }
        }
    }

    const changeCurrentValue = () => {

    }



    return (
        <div className="App">
            <div className="wrap">
                <Counter
                    currentValue={currentValue}
                    transform={transform}
                    opacity={opacity}
                    changeIsDoneSettings={changeIsDoneSettings}
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


