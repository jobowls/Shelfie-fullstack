import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/shelfie_icon.png'

const Header = (props) => {
    return (
        <div className="header" >
            <div className='brand'>
                <img src={logo} id='logo' alt='' />
                <span id='brand' > SHELFIE </span> 
            </div>
            <div id='head-btns' >
                <Link to='/dashboard' >
                    <button id='head-btn' > Dashboard </button>
                </Link>
                <Link to='/form' >
                    <button id='head-btn' > Form </button>
                </Link>
            </div>
        </div>
    )
}
export default Header