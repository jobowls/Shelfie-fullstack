import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <div className="header" >
            <Link to='/' >
             <button id='logo'> SHELFIE </button> 
            </Link>
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