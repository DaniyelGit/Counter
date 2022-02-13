import React from 'react';
import s from './scoreboard.module.css';


type ScoreboardPropsType = {}

export const Scoreboard = (props: ScoreboardPropsType) => {

    const {} = props;


    return (
        <div className={'scoreboard'}>
            <span className={'scoreboard__value'}>
                101
            </span>
        </div>
    );
};
