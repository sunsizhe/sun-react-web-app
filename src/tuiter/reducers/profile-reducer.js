import {createSlice} from "@reduxjs/toolkit";
import Profile from "../data/profile.json"

const profileSlice = createSlice({
    name:"profile",
    initialState: Profile,

    reducers:{
        saveProfile(state, action){

            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }

    }
});
export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;