import React, {useEffect, useState} from 'react'
import {GetFetchQuotes} from '../../api/fetch'

function Projects (){

    useEffect(()=>{
        GetFetchQuotes({
            uri: `${process.env.REACT_APP_SERVER_IP}/uploads/Thumbnail_1.png`,
            msg: 'GET projects thumbnail'
        }).then((response)=>{
            console.log(response)
        })
    },[])
    return (
    <div>
        projects page
    </div>
    )
}

export default Projects