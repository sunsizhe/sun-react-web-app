import React, {useState} from "react";
import "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment, faDirections, faHeart, faForward} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats =  ({tuit}) =>{
    //const homes = useSelector(state => state.home);
    const dispatch = useDispatch();
    const likedHandler = () => {
        const newTuit = {
            ...tuit,
            likes : tuit.likes + 1
        }
        dispatch(updateTuitThunk(newTuit))
    }
    const dislikedHandler = () => {
        const newTuit = {
            ...tuit,
            dislikes : tuit.dislikes - 1
        }
        dispatch(updateTuitThunk(newTuit))
    }
    return(
        <div>
            <a href="#" className="wd-float-left wd-lightgrey">
                <FontAwesomeIcon icon={faComment}/>{tuit.replies}</a>
            <a href="#" className="wd-float-left wd-lightgrey">
                <FontAwesomeIcon icon={faDirections}/> {tuit.retuits}</a>
            <a href="#" className="wd-float-left wd-lightgrey" onClick={likedHandler}>
                <i className="bi bi-hand-thumbs-up" ></i>{tuit.likes}</a>
            <a href="#" className="wd-float-left wd-lightgrey" onClick={dislikedHandler}>
                <i className="bi bi-hand-thumbs-down"></i>{tuit.dislikes}</a>
            <a href="#" className="wd-float-left wd-lightgrey">
                <i className="bi bi-box-arrow-up-right"></i></a>
        </div>

    );
};

export default TuitStats;