import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './inputBlock.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type InputPropsType = DefaultInputPropsType & {
    valueInput: number
    dataAttribute: string
}

export const InputBlock = React.memo( (props: InputPropsType) => {

    const {
        valueInput,
        dataAttribute,
        onChange,
    } = props;


    const labelChildren = dataAttribute === 'min' ? 'Минимальное' : 'Максимальное';

    return (
        <div className={'settings__wrap_input'}>
            <label className={'label'}>{labelChildren}</label>
            <input type={"number"}
                   value={valueInput}
                   data-input={dataAttribute}
                   onChange={onChange}
            />
        </div>
    );
});

