import React from 'react'
import TabButton from '../buttons/TabButton'
import './header.css'
import { ReactComponent as PrjLogo } from '../../assets/prjLogo.svg'

const Header = () => {
    return (
        <header>
            <div className='header--contents-wrap'>
                <div className='header--logo-wrap'>
                    <a href='#index'><PrjLogo className='header--logo'/></a>
                    <div className='header--logo-divider' />
                    <p className='header--logo-text'>For Business</p>
                </div>
                <div className='header--buttons-wrap'>
                    <TabButton text='Ad Market' link='#4' tretiary />
                    <TabButton text='Contracts' link='#4' />
                    <TabButton text='Ad Settings' link='#4' />
                    <TabButton text='Profile' link='#4' />
                </div>
            </div>
        </header>
    )
}

export default Header