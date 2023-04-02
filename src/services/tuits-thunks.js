import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',                     //unique thunk identifier
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId        //return tuit ID
    }
)

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => {
            await service.updateTuit(tuit)
        }      //sends updated tuit to sercer with server
    )