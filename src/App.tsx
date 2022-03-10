import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useSpring} from "react-spring";
import {selectCounterState} from "./redux/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {changeIsDoneSettingsAC, CounterReducersTypes} from "./redux/action";
import {Container} from "./container/Container";



const App = () => {

    return (
       <Container/>
    );
}

export default App;