import React from 'react'
import './tableSmallSegment.css'
import { ReactComponent as TonIcon } from '../../assets/tonIcon.svg'
import Avatar from '../avatar/Avatar'

const TableSmallSegment = (props) => {
    return (
        <div className={'table-small-segment ' + (props.bold ? 'bold ' : null) + (props.yellow ? 'yellow ' : null) + (props.red ? 'red' : null)}>
            {props.avatar ? <Avatar  src={props.avatar} /> : null} 
            {props.isTonValue ? <TonIcon className='table-small-segment--ton-icon' /> : null} 
            {props.text} 
        </div>
    )
}

export default TableSmallSegment