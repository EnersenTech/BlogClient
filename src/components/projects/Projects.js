import React, {useEffect, useState} from 'react'
import './Projects.css'
import {GetFetchQuotes} from '../../api/fetch'
import {Route, useLocation, useParams, Link} from 'react-router-dom'


function Projects (){
    // console.log(useLocation())
    // console.log(useParams())
    
    useEffect(()=>{
    },[])
    
    return (
    <section className='contents_odxa'>
        <aside>
            <h1 id="recent-blogs">
                Recent Blogs
            </h1>
            <h2><Link to={{pathname: `1`, state: {a:2}}}>
                        <img className='Thumbnail-size' src={`${process.env.REACT_APP_SERVER_IP}/uploads/Thumbnail_1.png`} />
                    </Link>
                    <span className='Blog-title'>TM4C123G Launchpad LED Blinking</span>
            </h2>
            <time>Oct 6, 2022 · 5 min read</time>
            <h2>
                    <Link to={{pathname: `2`, state: {a:2}}}>
                        <img className='Thumbnail-size' src={`${process.env.REACT_APP_SERVER_IP}/uploads/Mockup_1.png`} />
                    </Link>
                    <span className='Blog-title'>Arduino UNO Launchpad Switch</span>

            </h2>
            <time>Oct 6, 2022 · 3 min read</time>
            <h2>
                    <Link to={{pathname: `3`, state: {a:2}}}>
                        <img className='Thumbnail-size' src={`${process.env.REACT_APP_SERVER_IP}/uploads/Mockup_2.png`} />
                    </Link>
                    <span className='Blog-title'>TM4C123G Launchpad 7-Segments Control</span>

            </h2>
            <time>Oct 6, 2022 · 10 min read</time>

        </aside>
    </section>
    )
}

export default Projects