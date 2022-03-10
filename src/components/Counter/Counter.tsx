import React from 'react';
import s from './counter.module.css';
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {a} from "@react-spring/web";
import {SpringValue} from "react-spring";
import {Button} from "../Button/Button";


type CounterPropsType = {
    transform: SpringValue<string>
    opacity: SpringValue<number>
    currentValue: number
    changeIsDoneSettings: (e: React.MouseEvent<HTMLButtonElement>) => void
    changeCurrentValue: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Counter = (props: CounterPropsType) => {

    const {
        transform,
        opacity,
        currentValue,
        changeIsDoneSettings,
        changeCurrentValue,
    } = props;

    const styleForCounter = {opacity: opacity.to((o: number) => 1 - o), transform};

    return (
        <a.div className={'counter'} style={styleForCounter}>

            <Scoreboard currentValue={currentValue}/>

            <div className={'counter__buttons'}>
                <div className={'counter__buttons_wrap'}>
                    <Button dataAttribute={'inc'}
                            className={'button button__inc'}
                            onClick={changeCurrentValue}
                            children={'увеличить'}
                    />
                    <Button dataAttribute={'dec'}
                            className={'button button__dec'}
                            onClick={changeCurrentValue}
                            children={'уменьшить'}
                    />
                </div>
                <div className={'wrap__button_set'}>
                    <Button className={'button button__set'}
                            dataAttribute={'on'}
                            onClick={changeIsDoneSettings}
                    >настроить</Button>
                </div>
            </div>
        </a.div>
    );
};
