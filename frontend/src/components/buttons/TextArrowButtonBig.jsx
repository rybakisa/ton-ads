import React from 'react'
import './button.css'
import { ReactComponent as ArrowRight} from '../../assets/linkArrow.svg'

const TextArrowButtonBig = (props) => {
  return (
    <a href={props.link} className='text-arrow-button big'>{props.text} <ArrowRight  className='arrow-big'/></a>
  )
}

export default TextArrowButtonBig