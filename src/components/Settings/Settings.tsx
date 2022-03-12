import React, {ChangeEvent} from 'react';
import s from './settings.module.css';
import {InputBlock} from "./Input/InputBlock";
import { a } from "@react-spring/web";
import {SpringValue} from "react-spring";
import {Button} from "../Button/Button";



type SettingsPropsType = {
    transform: SpringValue<string>
    opacity: SpringValue<number>
    valueMin: number
    valueMax: number
    changeIsDoneSettings: (e: React.MouseEvent<HTMLButtonElement>) => void
    changeMaxOrMinValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Settings = (props: SettingsPropsType) => {

    const {
        transform,
        opacity,
        valueMin,
        valueMax,
        changeIsDoneSettings,
        changeMaxOrMinValue,
    }= props;

    const styleForSettings = {
        opacity,
        transform,
        rotateY: '180deg'
    }

    return (
        <a.div className={'settings'} style={styleForSettings}>
            <div className={'settings__wrap'}>
                <InputBlock valueInput={valueMin}
                            dataAttribute={'min'}
                            onChange={changeMaxOrMinValue}
                />
                <InputBlock valueInput={valueMax}
                            dataAttribute={'max'}
                            onChange={changeMaxOrMinValue}
                />
            </div>
            <div className={'settings__button'}>
                <Button dataAttribute={'off'}
                        className={'button__set'}
                        onClick={changeIsDoneSettings}
                >
                    Назад
                </Button>
            </div>
        </a.div>
    );
};
