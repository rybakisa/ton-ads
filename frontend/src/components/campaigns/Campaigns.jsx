import React from 'react'
import TableRowLarge from '../table/tableRowLarge/TableRowLarge'
import './campaigns.css'

const Campaigns = () => {
  return (
    <div>
      <h1 className='ad-settings--wrap'><b>Ad Campaign Settings</b></h1>
      <div className='ad-settings--elements'>
        <TableRowLarge />
        <TableRowLarge />
        <TableRowLarge />
        <TableRowLarge />
      </div>
    </div>
  )
}

export default Campaigns