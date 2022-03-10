import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    dataAttribute: string
}

export const Button = (props: ButtonPropsType) => {

    const {
        dataAttribute,
        onClick,
        ...restProps // className, children.
    } = props;



    return (
        <button
            data-settings={dataAttribute}
            onClick={onClick}
            {...restProps}
        />
    );
};

