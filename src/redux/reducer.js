import {createSlice} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

const user = createSlice({
    name:'user',
    initialState: {otpData:[],userDetails:[]},
    reducers: {
        otpData: (state, action) => {
            state.otpData = action.payload;
        },
        userDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        clear: (state) =>{
            state = {otpData:[],userDetails:[]}
        }
    }
})

const flights = createSlice({
    name:'flights',
    initialState: {allFlights:[], flightSelected:{}},
    reducers: {
        allFlights: (state,action) =>{
            state.allFlights = action.payload;
        },
        flightSelected: (state,action) =>{
            state.flightSelected = action.payload;
        }
    }
})

export const reducer = combineReducers({
    user: user.reducer,
    flightsInfo: flights.reducer
})

export const {otpData,userDetails,clear} = user.actions;
export const {allFlights,flightSelected} = flights.actions;