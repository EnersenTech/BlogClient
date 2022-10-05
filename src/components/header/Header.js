import React from 'react'
import './Header.css'
import routes from '../../route/routes'
import {Link} from 'react-router-dom'


const header_features = ["News", "Articles", "Projects", "Contact"];

function Header(){
    return (
    <section className='Header-box'>
         {routes.map((route,index)=>{
            return(
            <Link key={index} to={route.name} className="Categories-box">
                {route.name}
            </Link>
            )
        })}
    </section>

    )
}

export default Header