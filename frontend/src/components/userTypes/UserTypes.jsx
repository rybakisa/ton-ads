// import '../../variablesDark.css';
import React from 'react'
import './userTypes.css'
import Button from '../buttons/Button'

const UserTypes = () => {
    return (
        <div className='user-type--wrap'>
            <h1><b>Choose Demo User Role</b></h1>
            <Button className='user-type--button' link='advertiser/profile' text='Sign in as Advertiser' primary/>
            <Button className='user-type--button' link='platform/platformProfile' text='Sign in as Platform' secondary/>
        </div>
    )
}

export default UserTypes