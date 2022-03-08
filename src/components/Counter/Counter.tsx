import React from 'react';
import s from './counter.module.css';
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {a} from "@react-spring/web";
import {SpringValue} from "react-spring";


type CounterPropsType = {
    transform: SpringValue<string>
    opacity: SpringValue<number>
    changeIsDoneSettings: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Counter = (props: CounterPropsType) => {

    const {
        transform,
        opacity,
        changeIsDoneSettings,
    } = props;

    const styleForCounter = {opacity: opacity.to((o: number) => 1 - o), transform};

    return (
        <a.div className={'counter'} style={styleForCounter}>

            <Scoreboard/>

            <div className={'counter__buttons'}>
                <div className={'counter__buttons_wrap'}>
                    <button className={'button button__inc'}>увеличить</button>
                    <button className={'button button__dec'}>уменьшить</button>
                </div>
                <div className={'wrap__button_set'}>
                    <button
                        className={'button button__set'}
                        data-settings={'on'}
                        onClick={changeIsDoneSettings}
                    >
                        настроить
                    </button>
                </div>
            </div>
        </a.div>
    );
};
