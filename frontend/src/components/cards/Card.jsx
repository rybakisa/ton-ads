import React from 'react'
import './card.css'
import { ReactComponent as TonIcon } from '../../assets/tonIcon.svg'

const Card = (props) => {
  return (
    <div className='card-wrap'>
        <div className='card-header'>{props.headline} {props.isTonValue ? <TonIcon className='card-header--icon' /> : null}</div>
        {props.value}
    </div>
  )
}

export default Card