import React from 'react'
import './tableBigSegment.css'
import { ReactComponent as TonIcon } from '../../assets/tonIcon.svg'

const TableBigSegment = (props) => {
    return (
        <div className='table-big-segment--wrap'>
            <div className='table-big-segment--headline'>{props.headline}</div>
            {props.interactive ?
                props.interactive : <div className='table-big-segment--value'>{props.isTonValue ? <TonIcon className='table-big-segment--value--icon' /> : null} {props.value}</div>}
        </div>
    )
}

export default TableBigSegment