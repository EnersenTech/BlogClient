import React ,{useEffect, useState} from 'react'
import {useParams } from 'react-router-dom';
import './Project.css'
import {GetFetchQuotes} from '../../../api/fetch'
import ReactMarkdown from 'react-markdown'


function Project (){
    const {id} = useParams()

    const [metaData, setMetaData] = useState([])
    const [metaText, setMetaText] = useState('')


useEffect(()=>{
    GetFetchQuotes(
        {
            uri: `${process.env.REACT_APP_SERVER_IP}/project/${id}`,
            msg: 'Blog Content GET'
        }
    ).then(response => {
        const {data, text} = response.data
        setMetaData(data)
        setMetaText(text)
    })
},[])


    
    return (
        <div className='rows'>
            <section className='col-sm-12'>
                <div className='region region-header'>
                    {metaData.map((el,idx) => {return (
                        <React.Fragment key={idx}>
                            <ol className='breadcrumb'>
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                
                                <li>
                                    <a href='/microcontroller-projects'>{el.category} Based Projects</a>
                                </li>
                                <li className='active'>
                                    {el.title}
                                </li>
                            </ol>
                             <h1 className='page-header'> 
                                <span>
                                    {el.title}
                                </span>
                             </h1>
                            <img className='Thumbnail-size' src={`${process.env.REACT_APP_SERVER_IP}${el.img_path}`} />
                    </React.Fragment>
                       )})}
                </div>
                <div>
                <ReactMarkdown>{metaText}</ReactMarkdown>
                </div>
            </section>
        </div>

    )
}

export default Project