import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    dataAttribute: string
}

export const Button = React.memo( (props: ButtonPropsType) => {

    const {
        dataAttribute,
        className,
        disabled,
        ...restProps // onClick, children
    } = props;

    console.log(props);



    return (
        <button
            className={`button ${className ? className : ''}`}
            data-button={dataAttribute}
            disabled={disabled}
            {...restProps}
        />
    );
});

