import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'

const OneBlog = (props)=>{

    const [blogList, setBlogList] = useState({})

    useEffect(()=>{

    }, [])

    return (
        <div>
            <div>
                <h1>One Blog</h1>
                <p></p>
            </div>
            <div>
                <Link to="#">
                    <button>Update</button>
                </Link>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <Link to="#">
                    <button>Delete</button>
                </Link>
            </div>
        </div>
    );
}

export default OneBlog