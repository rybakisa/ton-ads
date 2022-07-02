import React from 'react'
import './projectWidgets.css'
import './profileWidgets.css'
import { ReactComponent as AddWidgetSvg } from '../../../assets/4.svg'
import { ReactComponent as GraphOne } from '../../../assets/1.svg'
import { ReactComponent as GraphTwo } from '../../../assets/2.svg'
import { ReactComponent as GraphThree } from '../../../assets/3.svg'
import Widget from './widget/Widget'
import TableBigSegment from '../../table/TableBigSegment'
import Button from '../../buttons/Button'



const ProjectWidgets = () => {
    const [showWidgets, setShowWidgets] = React.useState(false);
    return (
        <div className='project-widgets--wrap'>
            <div className='project-widgets--data'>
                <TableBigSegment headline='Campaign Name' value='Something Phone Teaser' />
                <div className='project-widgets--data--numbers'>
                    <TableBigSegment headline='Ad Views' value='15,567,627' />
                    <TableBigSegment headline='Ad Clicks' value='154,616' />
                    <TableBigSegment headline='Conversion' value='0,9%' />
                    <TableBigSegment headline='Price per show' value='0.24' isTonValue />
                    <div onClick={() => setShowWidgets(s => !s)}><Button text='Show Widgets' secondary /></div>
                </div>
            </div>
            <div className={'project-widgets--cards ' + (!showWidgets ? 'project-widgets--cards--hidden': null)}>
                <Widget name='Overall Data' white />
                <Widget name='Clicks per Views, %' image={<GraphThree />} white />
                <Widget name='Views Per Month' image={<GraphOne />} white />
                <Widget name='Conversion per Month' image={<GraphTwo />} white />
                <Widget name='Clicks per Views, %' image={<GraphThree />} white />
                <Widget image={<AddWidgetSvg />} white />
            </div>
        </div>
    )
}

export default ProjectWidgets