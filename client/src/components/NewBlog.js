import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBlog = (props)=>{

    const [newBlog, setNewBlog] = useState({
        blogAuthor: "",
        blogTitle: "",
        text: "",
        date: ""
    })

    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    
    

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/blogs', newBlog)
        .then((res)=>{
            console.log(res.data)
            navigate("/")
        })
        .catch((err)=>{
            console.log(err.response.data.errors)
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
            <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input 
                        type="text" 
                        value={newBlog.blogAuthor}
                        onChange={inputHandler}
                        className="form-control"
                        name="blogAuthor"
                    />
                    {
                        errors.blogAuthor?
                        <p className="text-danger">{errors.blogAuthor.message}</p>
                        :null
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                        type="text" 
                        value={newBlog.blogTitle}
                        onChange={inputHandler}
                        className="form-control"
                        name="blogTitle"
                    />
                    {
                        errors.blogTitle?
                        <p className="text-danger">{errors.blogTitle.message}</p>
                        :null
                    }
                </div>
                <div className="row mb-3">
                    <label className="form-label">Review:</label>
                        <textarea 
                            rows={5} 
                            value={newBlog.text} 
                            className="form-control" 
                            name="text"
                            onChange={inputHandler}
                            />
                        {
                            errors.text?
                            <p className="text-danger">{errors.text.message}</p>
                            :null
                        }
                </div>
                <div className="row mb-3">
                    <label className="form-label">Date:</label>
                    <input 
                        type="date" 
                        name="date" 
                        className="form-control"
                        onChange={inputHandler}
                        />
                    {
                        errors.date?
                        <p className="text-danger">{errors.date.message}</p>:null
                    }
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

}

export default NewBlog

