import React from 'react';
import s from './counter.module.css';
import {Scoreboard} from "./Scoreboard/Scoreboard";



type CounterPropsType = {

}

export const Counter = (props: CounterPropsType) => {

    const {

    } = props;


    return (
        <div className="counter">

            <Scoreboard/>

            <div className={'counter__buttons'}>
                <div className={'counter__buttons_wrap'}>
                    <button className={'button button__inc'}>увеличить</button>
                    <button className={'button button__dec'}>уменьшить</button>
                </div>
                <div className={'wrap__button_set'}>
                    <button className={'button button__set'}>настроить</button>
                </div>
            </div>
        </div>
    );
};
