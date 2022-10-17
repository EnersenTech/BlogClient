import React ,{useEffect, useState} from 'react'
import {useParams } from 'react-router-dom';
import './Project.css'
import {GetFetchQuotes} from '../../../api/fetch'


function Project (){
    const {id} = useParams()

    const [metaData, setMetaData] = useState([])


useEffect(()=>{
    GetFetchQuotes(
        {
            uri: `${process.env.REACT_APP_SERVER_IP}/post/${id}`,
            msg: 'Blog Content GET'
        }
    ).then(response => {
        setMetaData(prev => [...prev, response.data])
    })
},[])


    
    return (
        <div className='rows'>
            <section className='col-sm-12'>
                <div className='region region-header'>
                    {metaData.map((el,idx) => {
                        console.log(el)
                        return (
                        <React.Fragment key={idx}>
                            <ol className='breadcrumb'>
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                
                                <li>
                                    <a href='/microcontroller-projects'>{el.CATEGORY_NAME} Based Projects</a>
                                </li>
                                <li className='active'>
                                    {el.TITLE}
                                </li>
                            </ol>
                             <h1 className='page-header'> 
                                <span>
                                    {el.TITLE}
                                </span>
                             </h1>
                            <img className='Thumbnail-size' src={`${process.env.REACT_APP_SERVER_IP}/file/${el.THUMBNAIL}`} />
                            <div dangerouslySetInnerHTML={{__html: el.CONTENT_TEXT}}>
                             </div>
                    </React.Fragment>
                       )})}
                </div>

            </section>
        </div>

    )
}

export default Project