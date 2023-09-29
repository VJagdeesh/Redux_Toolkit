import {createSlice} from "@reduxjs/toolkit";

const users=createSlice({
name:"user",
initialState:[],
reducers:{
addUser(state,action){},
removeUser(state,action){},
clearAllUser(state,action){},
},
});

export {users}