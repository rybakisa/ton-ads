import React from 'react'
import './addressCopyButton.css'
import { ReactComponent as CopyIcon } from '../../../assets/copyIcon.svg'

const AddressCopyButton = (props) => {
    return (
        <button onClick={() => { navigator.clipboard.writeText(props.walletAddress) }} className='address-copy-button'>
            <div className='address-copy-button--address'>{props.walletAddress}</div>
            <CopyIcon className='address-copy-button--icon' />
        </button>
    )
}

export default AddressCopyButton