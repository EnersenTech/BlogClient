import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
    <nav className='navbar relative_u8zJ'>
        <div className='navbar_inner'>
            <div className='navbar__items'>
                <button className='navbar__toggle'></button>
                <a className='navbar__brand' href='/'>
                    <b className='navbar__title text--truncate'>Enersen</b>
                </a>
            </div>
            <div className='navbar__items navbar__times--right'>
                <button className='DocSearch DocSearch-Button' aria-label='Search'></button>
                <span className='link_sZph'>
                    <a href='/Login' className='login_WR5E'>Login</a>
                </span>
            </div>
        </div>
    </nav>

    )
}

export default Navbar