import React from 'react'
import '../../variables.css'
import '../../index.css'
import './landing.css'
import { ReactComponent as PrjLogo } from '../../assets/prjLogo.svg'
import { ReactComponent as ImageOne } from '../../assets/landing1.svg'
import { ReactComponent as ImageTwo } from '../../assets/landing2.svg'
import { ReactComponent as ImageThree } from '../../assets/landing3.svg'
import { ReactComponent as ImageFour } from '../../assets/landing4.svg'
import { ReactComponent as ImageFive } from '../../assets/landing5.svg'
import { ReactComponent as ImageSix } from '../../assets/landing6.svg'
import { ReactComponent as ImageSeven } from '../../assets/landing7.svg'
import Button from '../buttons/Button'

const Landing = () => {
    return (
        <div>
            <div className='header-wrap'>
                <PrjLogo className='logo-style' />
                <div className='header-buttons'>
                    <Button link='#about' text='About' tretiary />
                    <Button link='#buy' text='Buy Ads' tretiary />
                    <Button link='#sell' text='Sell Ads' tretiary />
                    <Button link='/usertypes' text='Launch App' primary />
                </div>
            </div>
            <div className='screens-wrapper' id='#about'>
                <div className='screen-lr'>
                    <div className='left-side'>
                        <div className='headline-one left'>Peer to Peer<br />  Ads in <b className='blue'>TON WEB</b></div>
                        <div className='pseudo-paragraph left'>Buy ads from platforms or sell placeholders and earn money without middle parties. Lightning-quick speeds and billions of transactions with zero fees, on your terms. Based on TON Payment Channels. An MVP for Hack-a-TON.</div>
                    </div>
                    <div className='right-side'><ImageOne /></div>
                </div>
                <div className='screen-center background-darker' id='#buy'>
                    <div className='block-one'>
                        <div className='headline-two centered'>Getting Rid of Middle Agents</div>
                        <div className='pseudo-paragraph centered'>Feeling unable to find a good placement for your ad? <br />See them no more, it's your ads, your partners, your platforms.</div>
                    </div>
                    <div className='image-two-wrapper'><ImageTwo /></div>
                </div>
                <div className='screen-lr'>
                    <div className='right-side'><ImageThree /></div>
                    <div className='left-side'>
                        <div className='headline-one left'>Same Ease, <br /><b className='blue'>Less Fees</b></div>
                        <div className='pseudo-paragraph left'>It's just as automated as any other middle ad service. But now, with TON Payment Channels, the smart contract guarantees proper operations. In the event one of the parties starts to cheat or completely disappears, the other channel’s party will be able to independently close the payments channel and collect the deposited funds by showing mathematical proof. </div>
                    </div>
                </div>
                <div className='screen-center'>
                    <div className='block-one'>
                        <div className='headline-two centered'>Let Us Find Platforms <br />That Fit Best...</div>
                    </div>
                    <div className='image-four-wrapper'><ImageFour /></div>
                </div>
                <div className='screen-center'>
                    <div className='block-one'>
                        <div className='headline-two centered'>...Or Choose Them Yourself</div>
                        <div className='pseudo-paragraph centered'>If you only trust partners after a proper inquiry,<br /> you may now find them on the Market and make an ad publish smart contract.</div>
                    </div>
                    <div className='image-six-wrapper'><ImageSix /></div>
                </div>
                <div className='screen-lr' id='#sell'>
                    <div className='left-side'>
                        <div className='headline-one left'>Got a <b className='blue'>Platform?</b><br /> Earn with It</div>
                        <div className='pseudo-paragraph left'>Simply add your platform and placeholders to our service, automate it and start earning from your website. With the speed of TON Network, you may now see live your margin at any moment.</div>
                    </div>
                    <div className='right-side'><ImageFive /></div>
                </div>
                <div className='screen-center'>
                    <div className='block-one'>
                        <div className='headline-two centered'>Use Analytics Widgets</div>
                    </div>
                    <div className='image-seven-wrapper'><ImageSeven /></div>
                </div>
                <div className='button-block'>
                    <Button link='https://www.figma.com/proto/rcZpobTcAhzshogwWra53t/TON?page-id=9%3A142&node-id=15%3A297&viewport=675%2C595%2C0.26&scaling=min-zoom' text='Figma Prototype' secondary />
                    <Button link='https://youtu.be/m8q9lQIs6JU' text='Explanation Video' secondary />
                    <Button link='https://github.com/rybakisa/ton-ads' text='GitHub Repo' secondary />
                    <Button link='/usertypes' text='Launch Demo App' primary />
                </div>
            </div>
        </div>
    )
}

export default Landing