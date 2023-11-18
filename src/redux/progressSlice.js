import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const getScoresStorage = createAsyncThunk('scores/getScoresStorage', async()=>{
    try {

        const response = await AsyncStorage.getItem("scoreData")

        if(response){
            const parsedResponse = JSON.parse(response)
            return parsedResponse
        }else{
            return [];
        }

    } catch (error) {
        console.log("Error getting scores from AsyncStorage ",error)
    }
})


const initialState = {
    scores:[],
    isLoading:false,
    error: null,
}


const progressSlice = createSlice({
    name: 'scores',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(getScoresStorage.pending,(state)=>{
                state.isLoading = true
                state.error = null
            })
            .addCase(getScoresStorage.fulfilled,(state, action)=>{
                state.isLoading = false
                state.error = null
                state.scores = action.payload
            })
            .addCase(getScoresStorage.rejected,(state,action)=>{
                state.isLoading =false
                state.error = action.error.message
            })
    }
})

export default progressSlice.reducer
