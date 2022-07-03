import React from 'react'
import Button from '../buttons/Button'
import './popUp.css'

const PopUp = (props) => {
    return (props.trigger) ? (
        <div className='global-wrapper'>
            <div className='pop-up--wrap'>To Be Developed <button onClick={() => props.setTrigger(false)}><Button text='Ok, Got it!' primary /></button></div>
        </div>
    ) : ''
}

export default PopUp