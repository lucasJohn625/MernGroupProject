import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
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
                <h1>Edit Blog</h1>
            </div>
            <form className="w-50 mx-auto" onSubmit={updateHandler}>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        value={editBlog.blogAuthor}
                        onChange={inputHandler}
                        className="form-control"
                        name="blogAuthor"
                    />
                    {errors.blogTitle ? (
                        <p className="text-danger">
                            {errors.blogAuthor.message}
                        </p>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        value={editBlog.blogTitle}
                        onChange={inputHandler}
                        className="form-control"
                        name="blogTitle"
                    />
                    {errors.blogTitle ? (
                        <p className="text-danger">
                            {errors.blogTitle.message}
                        </p>
                    ) : null}
                </div>
                <div className="row mb-3">
                    <label className="form-label">Review:</label>
                    <textarea
                        rows={5}
                        value={editBlog.text}
                        className="form-control"
                        name="text"
                        onChange={inputHandler}
                    />
                    {errors.blogContent ? (
                        <p className="text-danger">{errors.text.message}</p>
                    ) : null}
                </div>
                <div className="row mb-3">
                    <label className="form-label">Date:</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        onChange={inputHandler}
                    />
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditBlog;
