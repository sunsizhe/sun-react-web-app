import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuitItem"

const TuitsList = () => {
    const homeArray = useSelector(state => state.home)
    return(
        <ul className="list-group">{
            homeArray.map(home =>
                <TuitItem
                    key={home._id} home={home}/>)
            }
        </ul>
    );
};
export default TuitsList;