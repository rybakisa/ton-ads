import React from 'react'
import TextArrowButtonBig from '../../buttons/TextArrowButtonBig'
import Toggle from '../../buttons/toggle/Toggle'
import TableBigSegment from '../TableBigSegment'
import './tableRowLarge.css'

const TableRowLarge = () => {
    return (
        <div className='table-row-large--wrap'>
            <TableBigSegment headline='Campaign Name' value='Donuts & Donate' />
            <div className='table-row-large--right-wrap'>
                <TableBigSegment headline='Automatch' interactive= <TextArrowButtonBig link='#a' text='Triggers' /> />
                <TableBigSegment headline='　' interactive=<Toggle /> />
                <TableBigSegment headline='Content' interactive= <TextArrowButtonBig link='#a' text='View Content' /> />
                <TableBigSegment headline='Actions' interactive= <TextArrowButtonBig link='#a' text='Delete' /> />
            </div>
        </div>
    )
}

export default TableRowLarge