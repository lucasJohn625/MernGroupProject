import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import {useParams, Link} from "react-router-dom";
const ProfileDetail = (props) => {
    const {id} = useParams(); 
    const [oneProfile, setOneProfile] = useState({});
    const navigate = useNavigate();

// what is this
    const getProfile = () => {
        axios.get("http://localhost:8000/api/profiles/" + props._id)
        .then(response => {
            setOneProfile(response.data)
            console.log(response)
        })
        .catch(err => console.log("Error:", err))
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/profiles/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProfile(res.data);
            })
            .catch((err) => console.log(err) )
    }, [id]);

    const deleteProfile = (_id) => {
        axios.delete(`http://localhost:8000/api/profiles/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    const editBtn = (_id) => {
        navigate(`/profile/edit/${_id}`);
    }


    return (
        <div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Home</p>
                </Link>
            </div>
            <div className="profdetail-titlebtn-div">
            <h2 className="profile-detailpage-title">{oneProfile.profileName}</h2>
            </div>

            {/* DESCRIPTION */}
            <p>Description: </p>
            <p className="profdetail-description-cont"><span >{oneProfile.description}</span></p>
            <br/>

            {/* FAV FOOD */}
            <p>Favorite Food:</p>
            <p><span className="profdetail-description-cont">${oneProfile.favFoods}</span></p>
            <br/>

            {/* FAV RES */}
            <p>Favorite Restaurants:</p>
            <p><span className="profdetail-description-cont">${oneProfile.favRestaurants}</span></p>
            <br/>

            {/* EDIT BTN */}
            <button onClick={ e => {editBtn(oneProfile._id)}} className="profile-edit-btn">Edit Profile</button>
            {/* REMOVE PROFILE*/}
            <button onClick={ e => {deleteProfile(oneProfile._id)}} className="remove-profile-btn">Remove Profile</button>

        </div>
    );
};

export default ProfileDetail;

