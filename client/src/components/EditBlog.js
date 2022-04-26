import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const EditBlog = (props) => {
    
    const [editBlog, setEditBlog] = useState({
        blogAuthor: "",
        blogTitle: "",
        text: "",
        date: "",
    });

    const {id} = useParams()

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/blogs/${id}`)
            .then((res)=>{
                console.log(res.data)
                setEditBlog(res.data)
            })
            .catch(err=>console.log(err))
    },[])
    
    const updateHandler = (e)=>{
        e.preventDefault()
        axios
            .put(`http://localhost:8000/api/blogs/${id}`, editBlog)
            .then((res)=>{
                console.log("Submitted data: " + editBlog)
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    const inputHandler = (e) => {
        let newBlogObject = { ...editBlog };
        newBlogObject[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
        setEditBlog(newBlogObject);
    };

    return (
        <div className="container mx-auto my-3">
            <div>
                <h1>Edit Review</h1>
            </div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Home</p>
                </Link>
            </div>
            <form className="w-50 mx-auto" onSubmit={updateHandler}>
                <div className="form-input-div">
                    <label className="">Author</label>
                    <input
                        type="text"
                        value={editBlog.blogAuthor}
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
                        value={editBlog.blogTitle}
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
                        value={editBlog.text}
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
};

export default EditBlog;
