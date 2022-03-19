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
    isDisabled: boolean
    checkingForCorrectValue: boolean
    changeIsDoneSettings: (e: React.MouseEvent<HTMLButtonElement>) => void
    changeMaxOrMinValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Settings = React.memo( (props: SettingsPropsType) => {

    const {
        transform,
        opacity,
        valueMin,
        valueMax,
        checkingForCorrectValue,
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
                            checkingForCorrectValue={checkingForCorrectValue}
                            onChange={changeMaxOrMinValue}
                />
                <InputBlock valueInput={valueMax}
                            dataAttribute={'max'}
                            checkingForCorrectValue={checkingForCorrectValue}
                            onChange={changeMaxOrMinValue}
                />
            </div>
            <div className={'settings__button'}>
                <Button dataAttribute={'off'}
                        className={'button__set'}
                        onClick={changeIsDoneSettings}
                >
                    назад
                </Button>
            </div>
        </a.div>
    );
});
