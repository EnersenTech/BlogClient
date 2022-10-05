import React, {useEffect, useState} from 'react'
import './Projects.css'
import {GetFetchQuotes} from '../../api/fetch'


function Projects (){
    return (
    <div>
        <img className='Thumbnail-size' src={`${process.env.REACT_APP_SERVER_IP}/uploads/Thumbnail_1.png`} />
    </div>
    )
}

export default Projects