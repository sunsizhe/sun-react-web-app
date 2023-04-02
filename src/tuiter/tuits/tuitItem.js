import React from "react";
import "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faLink} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuitStats";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "../reducers/home-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={48} height={48} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <span>{tuit.username}</span>
                        <FontAwesomeIcon icon={faCircleCheck} className="wd-blue"/>
                        <span className="wd-content">{tuit.handle}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div className="wd-title">
                        {tuit.short}
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item p-0">
                            <img src={`/images/${tuit.image}`} className="wd-posImag"/>
                        </li>
                        <li className="list-group-item wd-title">
                            <div>
                                {tuit.title}
                            </div>
                            <div className="wd-content">
                                {tuit.tuit}
                            </div>
                            <div className="wd-content">
                                <FontAwesomeIcon icon={faLink} className="wd-blue"/>
                                <span className="wd-content">{tuit.link}</span>
                            </div>
                        </li>
                    </ul>
                    <TuitStats key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;