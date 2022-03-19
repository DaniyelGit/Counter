import React from 'react';
import s from './scoreboard.module.css';


type ScoreboardPropsType = {
    currentValue: number
    valueMax: number
    valueMin: number
    isWarning: string
}

export const Scoreboard = React.memo((props: ScoreboardPropsType) => {

    const {
        currentValue,
        valueMax,
        valueMin,
        isWarning,
    } = props;

    const classNameForMaxValue = valueMax === currentValue && 'scoreboard__value_max';

    const checkingForCorrectValue = valueMin > valueMax || valueMin < 0 || valueMax < 0 || valueMax === valueMin;

    const resultJSXForScoreboard = checkingForCorrectValue
        ? <span className={'isWarning'}>{isWarning}</span>
        : <span className={`scoreboard__value ${classNameForMaxValue}`}>
            {currentValue}
          </span>

    return (
        <div className={'scoreboard'}>
            {resultJSXForScoreboard}
        </div>
    );
});
