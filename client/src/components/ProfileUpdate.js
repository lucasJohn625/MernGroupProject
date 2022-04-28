import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link} from "react-router-dom";
const ProfileUpdate = (props) => {
    const { id } = useParams();
    const [profileName, setProfileName] = useState("");
    const [description, setDescription] = useState("");
    const [favFoods, setFavFoods] = useState("");
    const [favRestaurants, setFavRestaurants] = useState("");

    const [profile, setProfile] = useState("");

    const [errors, setErrors] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/profiles/${id}`)
            .then(res => {
                console.log(res.data);
                setProfileName(res.data.profileName);
                setDescription(res.data.description);
                setFavFoods(res.data.favFoods);
                setFavRestaurants(res.data.favRestaurants);

            })
            .catch((err) => console.log(err))
    }, [id]);
    const updateSubmitHandler = (e) => {
        e.preventDefault();
        const putUpdateData = {
            profileName,
            description,
            favFoods,
            favRestaurants,
        };
        axios
            .put(`http://localhost:8000/api/profiles/${id}`, putUpdateData)
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/")
                }
                console.log(res)
                
            })
            .catch(err => console.log(err))
    };
    return (
        <div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Home</p>
                </Link>
            </div>
            <h3>Edit {profileName}'s Profile:</h3>
            <div>
                <form onSubmit={updateSubmitHandler}>
                    {/* NAME */}
                    <div className= "form-input-div">
                        <label>Name:</label>
                        <input
                        onChange = {(e)=> setProfileName(e.target.value)}
                        value={profileName}
                        name="profileName"
                        type="text"
                        />
                    </div>
                    { errors.profileName ? 
                    <p className="error-text" >{errors.profileName.message}</p>
                    : null
                }
                    <br/>


                    {/* DESCRIPTION */}
                    <div className= "form-descripton-div">
                        <label>Description:</label>
                        <textarea className="description-input"
                        onChange = {(e)=> setDescription(e.target.value)}
                        placeholder = {description}
                        name="description" 
                        cols="20" 
                        rows="4">
                        </textarea>
                    </div>
                    { errors.description ? 
                        <p className="error-text" >{errors.description.message}</p>
                        : null
                    }
                    <br/>

                    {/* favFoods */}
                    <div className= "form-descripton-div">
                        <label>Favorite Foods:</label>
                        <textarea className="description-input"
                        onChange = {(e)=> setFavFoods(e.target.value)}
                        placeholder = {favFoods}
                        name="favFoods" 
                        cols="20" 
                        rows="4">
                        </textarea>
                    </div>
                    { errors.favFoods ? 
                        <p className="error-text" >{errors.favFoods.message}</p>
                        : null
                    }
                    <br/>

                    {/* favRes */}
                    <div className= "form-descripton-div">
                        <label>Favorite Restaurants:</label>
                        <textarea className="description-input"
                        onChange = {(e)=> setFavRestaurants(e.target.value)}
                        placeholder = {favRestaurants}
                        name="favRestaurants" 
                        cols="20" 
                        rows="4">
                        </textarea>
                    </div>
                    { errors.favRestaurants ? 
                        <p className="error-text" >{errors.favRestaurants.message}</p>
                        : null
                    }
                    <br/>


                    <br/>
                    <input className="profile-add-btn" type="submit" value="Update" />
                    <br/>
                </form>
            </div>
        </div>
    );
};
export default ProfileUpdate;

