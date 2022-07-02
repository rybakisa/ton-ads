import React from 'react'
import './adMarket.css'
import Contracts from '../contracts/Contracts'
import ListOfContracts from '../contracts/contractsSegment/listOfContracts/ListOfContracts'

const AdMarket = () => {
  return (
    <div className='contracts-segment--wrap'>
    <h1 className='contracts-project top-margin'><b>Ad Platforms Market</b></h1>
    <ListOfContracts>

    </ListOfContracts>
</div>
  )
}

export default AdMarket