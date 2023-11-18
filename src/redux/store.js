import { configureStore, } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataReducer from './dataSlice'
import progressReducer from './progressSlice'

const store = configureStore({
    reducer:{
       data: dataReducer,
       progress: progressReducer,
    },
    middleware:[thunk]
})

export default store

