import React from 'react'
import './button.css'

const TabButton = (props) => {
    return (
        <a href={props.link} className='tab'>
            <button className={'tab ' + (props.primary ? 'button--primary' : 'button--tretiary')}>
                {props.text}
            </button>
        </a>
    )
}

export default TabButton