import React from 'react'
import './button.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function HeaderView() {
    const location = useLocation();
    return location.pathname
}

const TabButton = (props) => {
    return (
        <Link to={props.link} className='tab'>
            <button className={'tab ' + (HeaderView() === props.link ? 'button--primary' : 'button--tretiary' )}> 
                {props.text}
            </button>
        </Link>
    )
}

export default TabButton