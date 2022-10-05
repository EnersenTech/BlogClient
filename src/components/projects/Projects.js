import React, {useEffect, useState} from 'react'
import './Projects.css'
import {GetFetchQuotes} from '../../api/fetch'


function Projects (){

    // const [imges, setImages] = useState('')

    // useEffect(()=>{
    //     GetFetchQuotes({
    //         uri: `${process.env.REACT_APP_SERVER_IP}/uploads/Thumbnail_1.png`,
    //         msg: 'GET projects thumbnail'
    //     }).then((response)=>{
    //         console.log(response)
    //         const {data} = response
    //         setImages(data)
    //     })
    // },[])
    return (
    <div>
        projects page
        <img className='Thumbnail-size' src={`${process.env.REACT_APP_SERVER_IP}/uploads/Thumbnail_1.png`} />
    </div>
    )
}

export default Projects