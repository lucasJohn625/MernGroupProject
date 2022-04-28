import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {format,} from 'date-fns'


const Home = (props)=>{

    const [blogList, setBlogList] = useState([]);
    const [profile, setProfile] = useState([])
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/blogs")
        .then((res)=>{
            console.log(res.data)
            setBlogList(res.data)
        })
        .catch((err)=>console.log(err))
    }, []);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/profiles")
        .then((res)=>{
            console.log(res.data)
            setProfile(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    return (
        <div className="container mx-auto my-3">
            <div className="row mb-4">
                <div className="col-sm">
                    <h1 className="fw-bold">Too Much Salt</h1>
                </div>
                <div className="col-sm">
                    <Link to='/new'>
                        <button className=".profile-add-btn mx-2">Add New Review</button>
                    </Link>
                    
                    {
                        profile.length>0?
                            profile.map((profile, index)=>(
                            <Link key={index} to={`/profile/${profile._id}`}>
                                <button className="profile-add-btn">View Profile</button>
                            </Link>

                            ))
                        
                        :<Link to='/profile/new'>
                            <button className="profile-add-btn">Create Profile</button>
                        </Link>

                    }
                </div>
            </div>
            <div>
                <table className="table table-striped w-100 mx-auto">
                    <thead className="thead-dark">
                        <tr>
                            <th>Restaurant</th>
                            <th>Date Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogList?
                                blogList.map((blog, index)=>(
                                    <tr key={index}>
                                        <td><Link to={`/blog/${blog._id}`}>{blog.blogTitle}</Link></td>
                                        <td>{format((new Date(blog.createdAt)), 'MMMMMMM dd, yyyy')}</td>
                                    </tr>
                                ))
                            :null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home