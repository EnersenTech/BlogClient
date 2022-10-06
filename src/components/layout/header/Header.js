import React from 'react'
import './Header.css'
import Navbar from './navbar/Navbar'


const header_features = ["News", "Articles", "Projects", "Contact"];

function Header({title}) {
    return (
    <header className='header_gB2a'>
        <Navbar/>
        
    </header>

    )
}

export default Header