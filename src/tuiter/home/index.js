import React from "react";
import homesArray from './home.json'
import HomeItem from "./HomeItem";

const HomeItemList = () => {
    return(
        <ul className="list-group">
            {
                homesArray.map(home => <HomeItem key={home.id} home={home}/> )
            }
        </ul>
    );
};
export default HomeItemList;