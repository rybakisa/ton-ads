import React from 'react'
import TabButton from '../buttons/TabButton'
import './header.css'
import { ReactComponent as PrjLogo } from '../../assets/prjLogo.svg'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function HeaderView() {
    const location = useLocation();
    return location.pathname
}

const Header = () => {
    return (
        <header className={HeaderView().includes('/landing') || HeaderView().includes('/new-york-times') ? 'element-hidden' : null}>
            <div className='header--contents-wrap'>
                <div className='header--logo-wrap'>
                    <Link to='/usertypes'><PrjLogo className='header--logo'/></Link>
                    <div className='header--logo-divider' />
                    <p className='header--logo-text'>{HeaderView().includes('/advertiser')  ? 'For Advertisers' : HeaderView().includes('/platform')  ? 'For Platforms' : 'Choose User Role'}</p>
                </div>
                <div className={'header--buttons-wrap ' + (!HeaderView().includes('/advertiser')  ? 'element-hidden' : null)}>
                    <TabButton text='Ad Market' link='/advertiser/admarket' />
                    <TabButton text='Contracts' link='/advertiser/contracts' />
                    <TabButton text='Campaigns' link='/advertiser/campaigns' />
                    <TabButton text='Profile' link='/advertiser/profile' />
                </div>
                <div className={'header--buttons-wrap ' + (!HeaderView().includes('/platform')  ? 'element-hidden' : null)}>
                    {/* <TabButton text='Offers' link='/platform/offers' /> */}
                    <TabButton text='Contracts' link='/platform/contracts' />
                    <TabButton text='Platforms' link='/platform/platforms' />
                    <TabButton text='Profile' link='/platform/profile' />
                </div>
            </div>
        </header>
    )
}

export default Header