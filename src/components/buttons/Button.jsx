import React from 'react'
import './button.css'

const Button = (props) => {
    // const checkType = () => props.secondary ? 'button--secondary' : 'button--tretiary';

    return (
        <a href={props.link}>
            <button className={props.primary ? 'button--primary' : props.secondary ? 'button--secondary' : 'button--tretiary'}>
                {props.text}
            </button>
        </a>
    )
}

export default Button