import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {format,} from 'date-fns'


const Home = (props)=>{

    const [blogList, setBlogList] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/blogs")
        .then((res)=>{
            console.log(res.data)
            setBlogList(res.data)
        })
        .catch((err)=>console.log(err))
    }, []);

    return (
        <div className="container mx-auto my-3">
            <div className="row mb-4">
                <div className="col-sm">
                    <h1>Home</h1>
                </div>
                <div className="col-sm">
                    <Link to='/new'>
                        <button className="btn btn-primary m-2">Add New Blog</button>
                    </Link>
                    <Link to='#'>
                        <button className="btn btn-success">View Profile</button>
                    </Link>
                </div>
            </div>
            <div>
                <table className="table table-striped w-100 mx-auto">
                    <thead className="thead-dark">
                        <tr>
                            <th>Title</th>
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