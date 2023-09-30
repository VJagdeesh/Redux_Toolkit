import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
name:"user",
initialState:[],
reducers:{
addUser(state,action){},
removeUser(state,action){},
clearAllUser(state,action){},
},
});

export default userSlice.reducer;