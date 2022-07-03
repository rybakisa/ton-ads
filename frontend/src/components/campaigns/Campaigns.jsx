import React from 'react'
import TableRowLarge from '../table/tableRowLarge/TableRowLarge'
import './campaigns.css'

const Campaigns = () => {
  return (
    <div>
      <h1 className='ad-settings--wrap'><b>Ad Campaign Settings</b></h1>
      <div className='ad-settings--elements'>
      <TableRowLarge name='Donate 4 Charity Banner' subheadline='Campaign Name' />
      <TableRowLarge name='New Justin Bieber Tour' subheadline='Campaign Name' />
      <TableRowLarge name='Selling Garage' subheadline='Campaign Name' />
      <TableRowLarge name='Buy an Elephant TODAY' subheadline='Campaign Name' />
      </div>
    </div>
  )
}

export default Campaigns