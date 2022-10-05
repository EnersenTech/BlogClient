import React from 'react'
import './Header.css'
import routes from '../../route/routes'
import {Link} from 'react-router-dom'


const header_features = ["News", "Articles", "Projects", "Contact"];

// {routes.map((route,index)=>{
//     return(
//       <Link key={index} to={route.name}>
//         {route.name}
//       </Link>
//     )
//   })}


//       {header_features.map((categories, idx)=> {return <ul key={idx}>{categories}</ul>})}


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