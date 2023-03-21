import React from "react";
import {Link, link} from "react-router-dom"
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (

        <div className="list-group">
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}> Home </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}> Explore </Link>
            <Link to="/tuiter/notification" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}> Notifications </Link>
            <Link to="/tuiter/meeages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}> Messages </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}> Bookmarks </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}> Profile </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}> Lists </Link>
        </div>
    );
};

export default NavigationSidebar;