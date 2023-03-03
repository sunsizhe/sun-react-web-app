import React from "react";
import "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faLink, faComment, faDirections, faHeart, faForward} from "@fortawesome/free-solid-svg-icons";

const PostSummaryItem =  (
    {
        home={ "_id": 678, "userName": "Elon Musk", "handle": "@elonmusk - 23h",
            "short": "Amazing show about @Inspiration4x mission!",
            "title":"Count: Inspiration4 Mission to Space | Netflix Official Site",
            "avatarIcon": "elonHead.jpg",
            "image": "elon.jpg",
            "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbial space...",
            "link": "netflix.com","comments": "4.2k", "redirects": "3.5k", "likes": "37.5k"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={48} height={48} className="float-end rounded-3" src={`/images/${home.avatarIcon}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <span>{home.userName}</span>
                        <FontAwesomeIcon icon={faCircleCheck} className="wd-blue"/>
                        <span className="wd-content">{home.handle}</span>
                    </div>
                    <div className="wd-title">
                        {home.short}
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item p-0">
                            <img src={`/images/${home.image}`} className="wd-posImag"/>
                        </li>
                        <li className="list-group-item wd-title">
                            <div>
                                {home.title}
                            </div>
                            <div className="wd-content">
                                {home.content}
                            </div>
                            <div className="wd-content">
                                <FontAwesomeIcon icon={faLink} className="wd-blue" />
                                <span className="wd-content">{home.link}</span>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <a href="#" className="wd-float-left wd-lightgrey">
                            <FontAwesomeIcon icon={faComment}/>{home.comments}</a>
                        <a href="#" className="wd-float-left wd-lightgrey" >
                            <FontAwesomeIcon icon={faDirections}/> {home.redirects}</a>
                        <a href="#" className="wd-float-left wd-lightgrey" >
                            <FontAwesomeIcon icon={faHeart}/> {home.likes}</a>
                        <a href="#" className="wd-float-left wd-lightgrey">
                            <FontAwesomeIcon icon={faForward}/></a>
                    </div>
                </div>
            </div>
        </li>


    );
};
export default PostSummaryItem;