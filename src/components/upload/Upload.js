import React, { useState, useEffect }  from 'react'
import { useForm, Controller } from "react-hook-form";
import {GetFetchQuotes, PostFetchQuotes} from '../../api/fetch'
import MyEditor from './editor/Editor'

function Upload (){
    const [categoryList, setCategoryList] = useState([])
    const [categorySelected, setCategorySelected] = useState('')

    const [subCategoryList, setSubCategoryList] = useState([])
    const [subCategorySelected, setSubCategorySelected] = useState('')

    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')

    const { handleSubmit, control } = useForm({
        mode: "onChange"
      });
    
    
    // Handle image file submit to APi 
    const handleRegisterOnClick = (e) =>{
        console.log(e)

    }
      
    
    // Handle Data Submit to APi for uploading
  const handleSubmitOnClick = ({ editor_content }) => {
    console.log(editor_content)
    console.log(categorySelected)
    console.log(subCategorySelected)
    console.log("editor_content ==> ", editor_content);
    PostFetchQuotes({
        uri: `${process.env.REACT_APP_SERVER_IP}/post`,
        msg: 'POST blog post',
        body: {
            title: title,
            thumbnail: thumbnail,
            author: 'Lewis',
            tag: 'Test Tag',
            content_text: editor_content,
            category_id: categorySelected,
            sub_category_id: subCategorySelected
        }
    }).then(response => {
        console.log(response)
    })
  };

    useEffect(() =>{
         GetFetchQuotes({
            uri: `${process.env.REACT_APP_SERVER_IP}/post/category_list`,
             msg: 'Get category list from server'}).then(response => {
                console.log(response)
                const {data} = response
                    setCategoryList(data)
             })
    }, [])


    const handleSelect = (e) =>{
        setCategorySelected(e.target.value)
        GetFetchQuotes({
            uri: `${process.env.REACT_APP_SERVER_IP}/post/sub_category_list/${e.target.value}`,
             msg: 'Get sub category list from server'}).then(response => {
                console.log(response)
                const {data} = response    
                setSubCategoryList(data)
             })
        e.preventDefault()
    }

    const handleSubSelect = (e) =>{
        setSubCategorySelected(e.target.value)
    }


    const handleThumbnail = (e) =>{
        setThumbnail(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    return(
    <React.Fragment>
        <section>
            Category : 
            <select onChange={handleSelect} value={categorySelected}>
                <option value=''>--Select--</option>
            {categoryList.map((item,idx) =>  (
                <option value= {item.ID} key={idx}>
                    {item.NAME}
                </option>
            ))}
            </select>
        </section>
        <section>        
               Sub Category : 
               <select onChange={handleSubSelect} value={subCategorySelected}>
                <option value=''>--Select--</option>
            {       subCategoryList.map((item,idx) =>  (
                <option value= {item.ID} key={idx}>
                    {item.NAME}
                </option>
            ))}
            </select>
        </section>
        <section>
            Thumbnail : <input onChange={handleThumbnail} placeholder='Thumbanil Path'></input>
        </section>
        <section>
            Title: <input onChange={handleTitle} placeholder='Title'></input>
        </section>
        


        <form onSubmit={handleSubmit(handleSubmitOnClick)}>
        <Controller
          name="editor_content"
          control={control}
          render={({ field }) => {
            return (
              <MyEditor value={field.value} onChange={field.onChange} />
            );
          }}
        />

        <button type="submit" className="signup-button">
          Next
        </button>
      </form>
          </React.Fragment>)
}

export default Upload