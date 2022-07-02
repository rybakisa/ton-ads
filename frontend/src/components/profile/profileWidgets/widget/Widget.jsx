import React from 'react'
import './widget.css'

const Widget = (props) => {
  return (
    <div className={props.white ? 'widget--wrap white-background' : 'widget--wrap'} >
        {props.name}
        {props.image}
    </div>
  )
}

export default Widget