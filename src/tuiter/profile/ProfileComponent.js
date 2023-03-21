import React from "react";
import "./component.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    return (
        <>
            <div className="row">
                <div className="col-1 align-content-center">
                    <Link to="/tuiter" className="bi bi-arrow-left btn">
                    </Link>
                </div>
                <div className="col-5">
                    <div>
                        <div className="wd-bold">{profile.firstName} {profile.lastName}</div>
                        <div className="wd-gray">6,114 tweets</div>
                    </div>
                </div>
            </div>
            <div className="wd-wrapper">
                <img src={`/images/${profile.bannerPicture}`} className="wd-banner"/>
                <img src={`/images/${profile.profilePicture}`} className="wd-profile"/>
                <Link to="/tuiter/edit-profile" className="btn btn-outline-dark wd-end mt-3 me-3 rounded-pill wd-bold">Edit profile</Link>
            </div>
            <div className="wd-space"></div>
            <div className="wd-bold">{profile.firstName} {profile.lastName}</div>
            <div className="wd-gray">{profile.handle}</div>
            <p/>
            <p/>
            <p/>
            <div>{profile.bio}</div>
            <div className="row">
                <div className="col-3">
                    <i className="bi bi-geo-alt"></i>
                    <span>{profile.location}</span>
                </div>
                <div className="col-3">
                    <i className="bi bi-balloon ms-3"></i>
                    <span> Born {profile.dateOfBirth}</span>
                </div>
                <div className="col-6">
                    <i className="bi bi-balloon ms-3"></i>
                    <span> Jointed {profile.dateJoined}</span>
                </div>
            </div>
            <div>
                <span>{profile.followingCount} Following</span>
                <span className="tab">{profile.followersCount} Follows</span>
            </div>
        </>
    );
};

export default ProfileComponent;