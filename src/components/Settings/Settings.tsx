import React from 'react';
import s from './settings.module.css';
import {InputBlock} from "./Input/InputBlock";
import { a } from "@react-spring/web";
import {SpringValue} from "react-spring";





type SettingsPropsType = {
    transform: SpringValue<string>
    opacity: SpringValue<number>
    changeIsDoneSettings: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Settings = (props: SettingsPropsType) => {

    const {
        transform,
        opacity,
        changeIsDoneSettings,
    }= props;

    const styleForSettings = {
        opacity,
        transform,
        rotateY: '180deg'
    }

    return (
        <a.div className={'settings'} style={styleForSettings}>
            <div className={'settings__wrap'}>
                <InputBlock/>
                <InputBlock/>
            </div>
            <div className={'settings__button'}>
                <button
                    className={'button button__set'}
                    data-settings={'off'}
                    onClick={changeIsDoneSettings}
                >
                    Назад
                </button>
            </div>
        </a.div>
    );
};
