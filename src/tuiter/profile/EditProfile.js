import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./component.css"
import {saveProfile} from "../reducers/profile-reducer"


const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    let[firstName, setFirstName] = useState(profile.firstName);
    let[lastName, setLastName] = useState(profile.lastName);
    let[location, setLocation] = useState(profile.location);
    let[dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    let[bio, setBio] = useState(profile.bio);
    const dispatch = useDispatch();

    const saveProfileHandler = () => {
        const newProfile = {
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            dateOfBirth: dateOfBirth,
        }
        dispatch(saveProfile(newProfile));
    }

    return(
        <>
            <div className="row">
                <div className="col-1 align-content-center">
                    <Link to="/tuiter/profile" className="bi bi-x-lg btn">
                    </Link>
                </div>
                <div className="col-9">
                    <h2>Edit profile</h2>
                </div>
                <Link to="/tuiter/profile" className="btn btn-primary m-3 me-3 col-1 btn-dark wd-bold rounded-pill" onClick={saveProfileHandler}>Save</Link>
            </div>
            <div className="wd-wrapper">
                    <img src={`/images/${profile.bannerPicture}`} className="wd-banner"/>
                    <img src={`/images/camera.png`} className="wd-camera"/>
                    <img src={`/images/${profile.profilePicture}`} className="wd-profile"/>
                    <img src={`/images/camera.png`} className="wd-camera-head"/>
            </div>
            <div className="wd-space"></div>
            <div>
                <label htmlFor="fName">FirstName</label>
                <textarea id="fName" value={firstName} className="form-control wd-border"
                          onChange={(event) => setFirstName(event.target.value)}>
                </textarea>
                <br/>
                <label htmlFor="lName">LastName</label>
                <textarea id="lName" value={lastName} className="form-control wd-border"
                          onChange={(event) => setLastName(event.target.value)}>
                </textarea>
                <br/>
                <label htmlFor="Bio">Bio</label>
                <textarea id="Bio" value={bio} className="form-control wd-border"
                          onChange={(event) => setBio(event.target.value)}>
                </textarea>
                <br/>
                <label htmlFor="Location">Location</label>
                <textarea id="Location" value={location} className="form-control wd-border"
                          onChange={(event) => setLocation(event.target.value)}>
                </textarea>
            </div>
        </>
    )
};

export default EditProfile;