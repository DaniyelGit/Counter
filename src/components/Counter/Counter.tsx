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
    resetCurrentValue: () => void
    isDisabled: boolean
    valueMin: number
    valueMax: number
}


export const Counter = React.memo( (props: CounterPropsType) => {

    const {
        transform,
        opacity,
        currentValue,
        changeIsDoneSettings,
        changeCurrentValue,
        resetCurrentValue,
        isDisabled,
        valueMin,
        valueMax,
    } = props;

    const styleForCounter = {opacity: opacity.to((o: number) => 1 - o), transform};

    return (
        <a.div className={'counter'} style={styleForCounter}>

            <Scoreboard currentValue={currentValue}
                        valueMax={valueMax}
            />

            <div className={'counter__buttons'}>
                <div className={'counter__buttons_wrap'}>
                    <Button dataAttribute={'inc'}
                            onClick={changeCurrentValue}
                            children={'увеличить'}
                            disabled={isDisabled}
                    />
                    <Button dataAttribute={'dec'}
                            onClick={changeCurrentValue}
                            children={'уменьшить'}
                            disabled={currentValue <= valueMin}
                    />
                    <Button dataAttribute={'reset'}
                            children={'сброс'}
                            disabled={currentValue === valueMin}
                            onClick={resetCurrentValue}
                    />
                </div>
                <div className={'wrap__button_set'}>
                    <Button className={'button__set'}
                            dataAttribute={'on'}
                            onClick={changeIsDoneSettings}
                    >настроить</Button>
                </div>
            </div>
        </a.div>
    );
});
