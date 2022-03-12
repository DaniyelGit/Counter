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
        className,
        ...restProps //
    } = props;



    return (
        <button
            className={`button ${className ? className : ''}`}
            data-button={dataAttribute}
            onClick={onClick}
            {...restProps}
        />
    );
};

