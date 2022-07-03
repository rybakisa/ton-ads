import React from 'react'
import Card from '../../cards/Card'
import AddressCopyButton from '../addressCopyButton/AddressCopyButton'
import './profileInfo.css'
import { ReactComponent as TonScanLogo } from '../../../assets/TONScanLogo.svg'

const ProfileInfo = (props) => {
    return (
        <div className='profile-info--wrap'>
            <div className='profile-info--left'>
            <h1><b>{props.name}</b></h1>
            <div className='profile-info--left--buttons'>
            <AddressCopyButton walletAddress={props.walletAddress}/> <a href='https://testnet.tonscan.org/address/EQDIpd5DBvwhP45fLWa54-VYlIIsjXrWPHwHKqmdASId5NP2' className='address-copy-button' ><TonScanLogo/></a>
            </div>
            <a><button></button></a>
            </div>
            <div className='profile-info--right'>
            <Card headline='Balance' value={props.tonAmount} isTonValue/>
            <Card headline={props.headline} value={props.tonDelta} isTonValue/>
            </div>
        </div>
    )
}
export default ProfileInfo