import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useSpring} from "react-spring";
import {selectCounterState} from "./redux/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {changeIsDoneSettingsAC, CounterReducersTypes} from "./redux/action";



const App : React.FC = () => {

    const {
        isDoneSettings,
    } = useSelector(selectCounterState);

    const dispatch = useDispatch<Dispatch<CounterReducersTypes>>();

    const { transform, opacity} = useSpring({
        opacity: isDoneSettings ? 1 : 0,
        transform: `perspective(600px) rotateY(${isDoneSettings ? 180 : 0}deg)`,
        config: { mass: 1, tension: 300, friction: 80 }
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
}

export default App;