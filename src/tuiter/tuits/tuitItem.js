import React from "react";
import "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faLink} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/home-reducer";
const TuitItem =  (
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
) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
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
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(home._id)}></i>
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
                    <TuitStats
                        key={home._id} home={home}/>
                </div>
            </div>
        </li>


    );
};
export default TuitItem;