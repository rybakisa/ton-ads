import React from 'react'
import Card from '../../cards/Card'
import AddressCopyButton from '../addressCopyButton/AddressCopyButton'
import './profileInfo.css'

const ProfileInfo = () => {
    return (
        <div className='profile-info--wrap'>
            <div className='profile-info--left'>
            <h1><b>Name Nameovitzky</b></h1>
            <AddressCopyButton walletAddress='EQCmvIQ561RsheBUoEpWj6J3EL8uba0HOXbOB4NgFSUa2YPh'/>
            </div>
            <div className='profile-info--right'>
            <Card headline='Amount of TON' value='586,436,345' isTonValue/>
            <Card headline='Spent this Month' value='36,345' isTonValue/>
            </div>
        </div>
    )
}
export default ProfileInfo