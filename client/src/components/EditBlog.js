import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditBlog = (props) => {
    
    const [editBlog, setEditBlog] = useState({
        blogTitle: "",
        blogContent: "",
    });

    const {id} = useParams()

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

    },[])
    
    const updateHandler = (e)=>{
        e.preventDefault()
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
            <form className="w-50 mx-auto">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        value={editBlog.blogTitle}
                        onChange={inputHandler}
                        className="form-control"
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
                        value={editBlog.blogContent}
                        className="form-control"
                    />
                    {errors.blogContent ? (
                        <p className="text-danger">
                            {errors.blogContent.message}
                        </p>
                    ) : null}
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditBlog;
