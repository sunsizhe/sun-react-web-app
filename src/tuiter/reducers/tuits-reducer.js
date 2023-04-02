import {createSlice} from "@reduxjs/toolkit";
//import tuits from "../data/posts.json"
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "nasa.jpg",
}

const templateTuit = {
    ...currentUser,
    "image": "spacex.png",
    "title": "Space",
    "liked": false,
    "comments": 0,
    "redirects": 0,
    "likes": 0,
    "dislikes":0
}
const initialState = {
    tuits: [],
    loading: false  //loading flag to display spinner
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true   //true so UI can display spinner
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, {payload}) => {   //exrta payload from action object
                state.loading = false  //turn off loading
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error    //report error
            },
        [deleteTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.tuits = state.tuits
                    .filter(t => t._id !== payload);    //filter out tuit whose Id matches tuit to remove
            },
        [createTuitThunk.fulfilled]:
            (state, {payload}) => {
            state.loading = false
            state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);  //find index of updated tuit in array
                state.tuits[tuitNdx] = {                                                  //merge old tuit with updated tuit
                    ...state.tuits[tuitNdx],
                    ...payload
                };
            }

    },
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

export default tuitsSlice.reducer;
export const {liked, createTuit, deleteTuit} = tuitsSlice.actions