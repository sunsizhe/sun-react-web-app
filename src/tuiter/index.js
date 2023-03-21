import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index";
import TuitsList from "./tuits/tuitsList";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index";
import ProfileComponent from "./profile/ProfileComponent"
import whoReducer from "./reducers/who-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import homeReducer from "./reducers/home-reducer";
import profileReducer from "./reducers/profile-reducer";
import EditProfile from "./profile/EditProfile";

const  store = configureStore({
    reducer: {
        who:whoReducer,
        tuits: tuitsReducer,
        home:homeReducer,
        profile:profileReducer,
    }
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"> <WhoToFollowList/> </div>
            </div>
        </Provider>

    );
}

export default Tuiter;