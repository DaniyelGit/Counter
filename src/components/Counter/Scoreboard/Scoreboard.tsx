import React from 'react';
import s from './scoreboard.module.css';
import {useSelector} from "react-redux";
import {selectCounterState} from "../../../redux/CounterReducer";


type ScoreboardPropsType = {
    currentValue: number
}

export const Scoreboard = React.memo( (props: ScoreboardPropsType) => {

    const {
        currentValue,
    } = props;


    return (
        <div className={'scoreboard'}>
            <span className={'scoreboard__value'}>
                {currentValue}
            </span>
        </div>
    );
});
