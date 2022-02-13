import React from 'react';
import s from './settings.module.css';
import {InputBlock} from "./Input/InputBlock";



type SettingsPropsType = {

}

export const Settings = (props: SettingsPropsType) => {

    const {

    }= props;

    return (
        <div className="settings">
            <div className={'settings__wrap'}>
                <InputBlock/>
                <InputBlock/>
            </div>
            <div className={'settings__button'}>
                <button className={'button button__set'}>Назад</button>
            </div>
        </div>
    );
};
