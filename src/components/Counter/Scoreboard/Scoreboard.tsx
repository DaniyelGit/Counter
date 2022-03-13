import React from 'react';
import s from './scoreboard.module.css';
import {useSelector} from "react-redux";
import {selectCounterState} from "../../../redux/CounterReducer";


type ScoreboardPropsType = {
    currentValue: number
    valueMax: number
}

export const Scoreboard = React.memo( (props: ScoreboardPropsType) => {

    const {
        currentValue,
        valueMax,
    } = props;

   const classNameForMaxValue = valueMax === currentValue && 'scoreboard__value_max';

    return (
        <div className={'scoreboard'}>
            <span className={`scoreboard__value ${classNameForMaxValue}`}>
                {currentValue}
            </span>
        </div>
    );
});
