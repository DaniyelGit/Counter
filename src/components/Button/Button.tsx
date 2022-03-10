import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    dataAttribute: string
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: ButtonPropsType) => {

    const {
        dataAttribute,
        callBack,
        ...restProps // className, children.
    } = props;



    return (
        <button
            data-settings={dataAttribute}
            onClick={callBack}
            {...restProps}
        />
    );
};

