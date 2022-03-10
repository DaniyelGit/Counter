import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCounterState} from "../redux/CounterReducer";
import {Counter} from "../components/Counter/Counter";
import {Settings} from "../components/Settings/Settings";
import {Dispatch} from "redux";
import {changeIsDoneSettingsAC, CounterReducersTypes} from "../redux/action";
import {useSpring} from "react-spring";


export const Container = () => {

    const {
        isDoneSettings,
        valueMin,
        valueMax,
        currentValue,
    } = useSelector(selectCounterState)


    const dispatch = useDispatch<Dispatch<CounterReducersTypes>>();

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


    return (
        <div className="App">
            <div className="wrap">
                <Counter
                    transform={transform}
                    opacity={opacity}
                    changeIsDoneSettings={changeIsDoneSettings}
                />
                <Settings
                    transform={transform}
                    opacity={opacity}
                    changeIsDoneSettings={changeIsDoneSettings}
                />
            </div>
        </div>
    );
};
