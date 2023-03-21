import {createSlice} from "@reduxjs/toolkit";
import home from "../data/home.json"

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "nasa.jpg",
}

const templateTuit = {
    ...currentUser,
    "image": "elon.jpg",
    "title": "Space",
    "liked": false,
    "comments": 0,
    "redirects": 0,
    "likes": 0,
}

const homeSlice = createSlice({
    name: "home",
    initialState: home,
    reducers: {
        liked(state, action) {
            const element = state.find((home) => home._id === action.payload._id)
            element.liked = !element.liked;
        },

        createTuit(state, action) {
            state.unshift({  //add element on beginning
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },

        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const {liked, createTuit, deleteTuit} = homeSlice.actions  //export actions so we can call them from UI
export default homeSlice.reducer;