import React from 'react';
import s from './inputBlock.module.css';

type InputPropsType = {

}

export const InputBlock = (props: InputPropsType) => {

    const {

    } = props;

    return (
        <div className={'settings__wrap_input'}>
            <label className={'label'}>Минимальное:</label>
            <input type={"number"} value={'0'}/>
        </div>
    );
};

