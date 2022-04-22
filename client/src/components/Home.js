import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const Home = (props)=>{

    const [blogList, setBlogList] = useState({});

    useEffect(() => {}, []);

    return (
        <div className="container mx-auto my-3">
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <table className="table table-striped w-75 mx-auto table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Link to='/new'>
                    <button>Add</button>
                </Link>
                <Link to='#'>
                    <button>Profile</button>
                </Link>
            </div>
        </div>
    );
}

export default Home