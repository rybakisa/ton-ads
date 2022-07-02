import React from 'react'
import './contractsSegment.css'
import ListOfContracts from './listOfContracts/ListOfContracts'

const ContractsSegment = () => {
    return (
        <div className='contracts-segment--wrap'>
            <h1 className='contracts-project top-margin'><b>Ad Campaign Name</b></h1>
            <ListOfContracts title='Current Contracts'>

            </ListOfContracts>
            <ListOfContracts title='History'>

            </ListOfContracts>
        </div>
    )
}

export default ContractsSegment