import React from 'react'
import './button.css'
import { ReactComponent as ArrowRight } from '../../assets/linkArrow.svg'
import { useState } from 'react';
import PopUp from '../popUp/PopUp';

const TextArrowButtonBig = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <button onClick={() => setButtonPopup(true)}><a href={props.link} className='text-arrow-button big'>{props.text} <ArrowRight className='arrow-big' /></a></button>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
    </>
  )
}

export default TextArrowButtonBig