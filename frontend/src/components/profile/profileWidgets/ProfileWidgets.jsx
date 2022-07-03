import React from 'react'
import './profileWidgets.css'
import Widget from './widget/Widget'
import { ReactComponent as AddWidgetSvg } from '../../../assets/4.svg'
import { ReactComponent as GraphOne } from '../../../assets/1.svg'
import { ReactComponent as GraphTwo } from '../../../assets/2.svg'
import { ReactComponent as GraphThree } from '../../../assets/3.svg'

const profileWidgets = () => {
    return (
        <div className='profile-widgets--wrap'>
            <h1>Ad Statistics</h1>
            <div className='profile-widgets--cards'>
                <Widget name='Overall Data' />
                <Widget name='Clicks per Views, %' image = {<GraphThree />} />
                <Widget name='Views Per Month' image = {<GraphOne />} />
                <Widget name='Conversion per Month' image = {<GraphTwo />} />
                <Widget name='Clicks per Views, %' image = {<GraphThree />} />
                <Widget image = {<AddWidgetSvg />} />
            </div>
        </div>
    )
}

export default profileWidgets