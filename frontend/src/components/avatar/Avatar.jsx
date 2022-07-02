import React from 'react'
import './avatar.css'

const Avatar = (props) => {
  return (
    <img src={props.src} className={'avatar ' + (props.big ? 'big-avatar' : null)} />
  )
}

export default Avatar