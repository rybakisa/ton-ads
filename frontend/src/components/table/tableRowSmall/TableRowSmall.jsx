import React from 'react'
import TextArrowButton from '../../buttons/TextArrowButton'
import TableSmallSegment from '../TableSmallSegment'
import './tableRowSmall.css'
import { useState } from 'react';
import PopUp from '../../popUp/PopUp';

const TableRowSmall = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className='table-row-small'>
            <TableSmallSegment text='Company Name' avatar='fgds.jpg' bold />
            <div className='table-row-small--right'>
                <TableSmallSegment text='Value' />
                <TableSmallSegment text='Value' />
                <TableSmallSegment text='Value' />
                <TableSmallSegment text='Value' />
                <TableSmallSegment text='Value' isTonValue />
                <TableSmallSegment text='State' bold yellow />
                <button onClick={() => setButtonPopup(true)}><TextArrowButton link='#435' text='Abort' /></button>
            </div>
            <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
    )
}

export default TableRowSmall