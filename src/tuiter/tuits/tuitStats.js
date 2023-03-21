import React, {useState} from "react";
import "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment, faDirections, faHeart, faForward} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {liked} from "../reducers/home-reducer";


const TuitStats =  (
    {
        home={ "_id": 678, "userName": "Elon Musk", "handle": "@elonmusk - 23h",
            "short": "Amazing show about @Inspiration4x mission!",
            "title":"Count: Inspiration4 Mission to Space | Netflix Official Site",
            "avatarIcon": "elonHead.jpg",
            "image": "elon.jpg",
            "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbial space...",
            "link": "netflix.com","comments": "4.2k", "redirects": "3.5k", "likes": "37.5k", "liked":true
        }

    }
) =>{
    //const homes = useSelector(state => state.home);
    const dispatch = useDispatch();
    const likedHandler = () => {
        dispatch(liked(home))
    }
    return(
        <div>
            <a href="#" className="wd-float-left wd-lightgrey">
                <FontAwesomeIcon icon={faComment}/>{home.comments}</a>
            <a href="#" className="wd-float-left wd-lightgrey" >
                <FontAwesomeIcon icon={faDirections}/> {home.redirects}</a>
            <a href="#" className="wd-float-left wd-lightgrey" >
                <FontAwesomeIcon icon={faHeart} className={`${home.liked ? 'liked':''}`} onClick={() => likedHandler(home)}/> {home.likes}</a>
            <a href="#" className="wd-float-left wd-lightgrey">
                <FontAwesomeIcon icon={faForward}/></a>
        </div>

    );
};

export default TuitStats;