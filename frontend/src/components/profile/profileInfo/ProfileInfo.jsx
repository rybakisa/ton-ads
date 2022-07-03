import React from 'react'
import Card from '../../cards/Card'
import AddressCopyButton from '../addressCopyButton/AddressCopyButton'
import './profileInfo.css'

const ProfileInfo = (props) => {
    return (
        <div className='profile-info--wrap'>
            <div className='profile-info--left'>
            <h1><b>{props.name}</b></h1>
            <AddressCopyButton walletAddress={props.walletAddress}/>
            </div>
            <div className='profile-info--right'>
            <Card headline='Balance' value={props.tonAmount} isTonValue/>
            <Card headline={props.headline} value={props.tonDelta} isTonValue/>
            </div>
        </div>
    )
}
export default ProfileInfo