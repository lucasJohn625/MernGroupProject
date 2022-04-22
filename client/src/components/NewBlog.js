import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const NewBlog = (props)=>{

    const [newBlog, setNewBlog] = useState({
        blogTitle: "",
        blogContent: ""
    })

    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    
    

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/BLOG', newBlog)
        .then((res)=>{
            console.log(res.data)
            navigate("/")
        })
        .catch((err)=>{
            console.log(err.response.data)
            setErrors(err.response.data.errors)
        })
    }    

    const inputHandler = (e)=>{
        let newBlogObject = {...newBlog}
        newBlogObject[e.target.name] = e.target.value
        console.log(e.target.name, e.target.value)
        setNewBlog(newBlogObject)
    }

    return (
        <div className="container mx-auto my-3">
            <div>
                <h1>New Blog</h1>
            </div>
            <form className="w-50 mx-auto">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                        type="text" 
                        value={newBlog.blogTitle}
                        onChange={inputHandler}
                        className="form-control"
                    />
                    {
                        errors.blogTitle?
                        <p className="text-danger">{errors.blogTitle.message}</p>
                        :null
                    }
                </div>
                <div className="row mb-3">
                    <label className="form-label">Review:</label>
                        <textarea rows={5} value={newBlog.blogContent} className="form-control" />
                        {
                            errors.blogContent?
                            <p className="text-danger">{errors.blogContent.message}</p>
                            :null
                        }
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );

}

export default NewBlog

