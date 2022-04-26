import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { format } from "date-fns";

const OneBlog = (props)=>{

    const [blog, setBlog] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/blogs/${id}`)
        .then((res)=>{
            console.log(res.data)
            setBlog(res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    const deleteBlog = ()=>{
        axios.delete(`http://localhost:8000/api/blogs/${id}`)
        .then((res)=>{
            console.log(res.data)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="container">
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Home</p>
                </Link>
            </div>
            <div className="d-flex justify-content-start">
                <div className="col-10 m-2 p-2">
                    {blog && (
                        <div>
                            <h1 className='profile-detailpage-title fw-bold'>{blog.blogTitle}</h1>
                            <p className="fw-bold">Review:</p>
                            <p className='profdetail-description-cont'>{blog.text}</p>
                            <br/>
                            <p className=" fw-bold">Posted by:</p>
                            <p className='profdetail-description-cont'>{blog.blogAuthor}</p>
                            <br/>
                            <p className="fw-bold">Date visited:</p>
                            <p className='profdetail-description-cont'>{blog.date}</p>
                        </div>
                    )}
                </div>
                <div className="col-sm m-2 p-2">
                    <Link to={`/edit/${id}`}>
                        <button className="profile-edit-btn d-block ">
                            Update
                        </button>
                    </Link>
                    <button
                        className="remove-profile-btn my-4 d-block"
                        onClick={deleteBlog}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OneBlog