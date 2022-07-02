import React from 'react'
import './button.css'
import { ReactComponent as ArrowRight} from '../../assets/linkArrow.svg'

const TextArrowButton = (props) => {
  return (
    <a href={props.link} className='text-arrow-button'>{props.text} <ArrowRight /></a>
  )
}

export default TextArrowButton