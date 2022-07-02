import React from 'react'
import './listOfContracts.css'
import TableRowSmall from '../../../table/tableRowSmall/TableRowSmall'
import TextArrowButton from '../../../buttons/TextArrowButton'

const ListOfContracts = (props) => {
    return (
        <div>
            <h1 className='contracts-project'>{props.title}</h1>
            <div className='contracts-project--rows'>
                <TableRowSmall />
                <TableRowSmall />
                <TableRowSmall />
                <TableRowSmall />
            </div>
        </div>
    )
}

export default ListOfContracts