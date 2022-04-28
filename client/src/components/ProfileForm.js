import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const ProfileForm = (props) => {
    const [profiles, setProfiles] = useState([]);
    const [profileName, setProfileName] = useState("");
    const [description, setDescription] = useState("");
    const [favFoods, setFavFoods] = useState("");
    const [favRestaurants, setFavRestaurants] = useState("");
    

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/profiles/new', {
            profileName,
            description,
            favFoods,
            favRestaurants,
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);

                setProfiles([...profiles, res.data]);
                setProfileName("");
                setDescription("");
                setFavFoods("");
                setFavRestaurants("");

                navigate("/")


            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            })
    }


    return (
        <div>
            <div className="nav-bar">
                <Link to={`/`}>
                    <p className="nav-underline">Home</p>
                </Link>
            </div>
            <h3>Add Your Profile</h3>
            {/* <br/> */}
        <form onSubmit={onSubmitHandler}>
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
            <input className="profile-add-btn" type="submit" value="Add Profile" />
            
        </form>
        </div>
    );
};
export default ProfileForm;
