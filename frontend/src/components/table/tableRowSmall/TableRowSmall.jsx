import React from 'react'
import TextArrowButton from '../../buttons/TextArrowButton'
import TableSmallSegment from '../TableSmallSegment'
import './tableRowSmall.css'
import { useState } from 'react';
import PopUp from '../../popUp/PopUp';
// onClick={() => setButtonPopup(true)}
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
                <button><TextArrowButton link='https://testnet.tonscan.org/address/EQCm-ZDmQr3b5lg2K6CiHmUFA8rimAVuBcZqB5r_TlWBD9I9' text='TON Scan' /></button>
            </div>
            <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
    )
}

export default TableRowSmall