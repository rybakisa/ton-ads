import React from 'react'
import TabButton from '../buttons/TabButton'
import './header.css'
import { ReactComponent as PrjLogo } from '../../assets/prjLogo.svg'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header>
            <div className='header--contents-wrap'>
                <div className='header--logo-wrap'>
                    <Link to='/profile'><PrjLogo className='header--logo'/></Link>
                    <div className='header--logo-divider' />
                    <p className='header--logo-text'>For Business</p>
                </div>
                <div className='header--buttons-wrap'>
                    <TabButton text='Ad Market' link='/admarket' />
                    <TabButton text='Contracts' link='/contracts' />
                    <TabButton text='Ad Settings' link='/adsettings' />
                    <TabButton text='Profile' link='/profile' />
                </div>
            </div>
        </header>
    )
}

export default Header