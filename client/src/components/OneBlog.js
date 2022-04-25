import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'

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
        <div className='container'>
            <div className='row'>
                <div className='col-10 m-2 p-2'>
                    {
                        blog &&
                        <div>
                            <h1>{blog.blogTitle}</h1>
                            <p><span className='fw-bold'>Review:</span> {blog.text}</p>
                            <p><span className='fw-bold'>Posted by:</span> {blog.blogAuthor}</p>
                        </div>    
                    }
                </div>
                <div className='col-sm m-2 p-2'>
                    <Link to={`/edit/${id}`}>
                        <button className='btn btn-warning m-1 d-block '>Update</button>
                    </Link>
                    <Link to="/">
                        <button className='btn btn-success m-1 d-block'>Home</button>
                    </Link>
                    <button className='btn btn-danger m-1 d-block' onClick={deleteBlog}>Delete</button>
            </div>
            </div>
        </div>
    );
}

export default OneBlog