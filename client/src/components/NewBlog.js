import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Home</p>
                </Link>
            </div>
            <div>
                <h1>New Review</h1>
            </div>
            <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <div className="form-input-div">
                    <label className="">Author</label>
                    <input
                        type="text"
                        value={newBlog.blogAuthor}
                        onChange={inputHandler}
                        className=""
                        name="blogAuthor"
                    />
                    {errors.blogAuthor ? (
                        <p className="text-danger">
                            {errors.blogAuthor.message}
                        </p>
                    ) : null}
                </div>
                <br />
                <div className="form-input-div ">
                    <label className="">Title</label>
                    <input
                        type="text"
                        value={newBlog.blogTitle}
                        onChange={inputHandler}
                        className=""
                        name="blogTitle"
                    />
                    {errors.blogTitle ? (
                        <p className="text-danger">
                            {errors.blogTitle.message}
                        </p>
                    ) : null}
                </div>
                <br />
                <div className="form-descripton-div ">
                    <label className="">Review:</label>
                    <textarea
                        rows={5}
                        value={newBlog.text}
                        className=""
                        name="text"
                        onChange={inputHandler}
                    />
                    {errors.text ? (
                        <p className="text-danger">{errors.text.message}</p>
                    ) : null}
                </div>
                <br />
                <div className="form-input-div ">
                    <label className="">Date:</label>
                    <input
                        type="date"
                        name="date"
                        className=""
                        onChange={inputHandler}
                    />
                    {errors.date ? (
                        <p className="text-danger">{errors.date.message}</p>
                    ) : null}
                </div>
                <br />
                <input
                    type="submit"
                    value="Submit"
                    className="profile-add-btn"
                />
            </form>
        </div>
    );

}

export default NewBlog

