import React from 'react'
import './placements.css'
import '../campaigns/campaigns.css'
import TableRowLarge from '../table/tableRowLarge/TableRowLarge'

const Placements = () => {
  return (
    <div>
    <h1 className='ad-settings--wrap'><b>Ad Platform Settings</b></h1>
    <div className='ad-settings--elements'>
      <TableRowLarge name='The New York Times - Big Banner' subheadline='Placeholder Name' />
      <TableRowLarge name='The New York Times - Small Banner' subheadline='Placeholder Name' />
      <TableRowLarge name='The New York Times - Medium Banner' subheadline='Placeholder Name' />
      <TableRowLarge name='The New York Times - Large Banner' subheadline='Placeholder Name' />
    </div>
  </div>
  )
}

export default Placements