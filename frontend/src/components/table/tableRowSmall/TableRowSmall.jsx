import React from 'react'
import TextArrowButton from '../../buttons/TextArrowButton'
import TableSmallSegment from '../TableSmallSegment'
import './tableRowSmall.css'

const TableRowSmall = () => {
    return (
        <div className='table-row-small'>
            <TableSmallSegment text='Company Name' avatar='fgds.jpg' bold />
            <div className='table-row-small--right'>
                <TableSmallSegment text='Hello World' />
                <TableSmallSegment text='Hello World' />
                <TableSmallSegment text='Hello World' />
                <TableSmallSegment text='Hello World' />
                <TableSmallSegment text='Hello World' isTonValue />
                <TableSmallSegment text='Hello World' bold yellow />
                <TextArrowButton link='#435' text='Abort'/>
            </div>
        </div>
    )
}

export default TableRowSmall