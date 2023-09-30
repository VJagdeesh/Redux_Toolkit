import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
name:"user",
initialState:[],
reducers:{
addUser(state,action){
state.push(action.payload); 
// console.log(action.payload);   
},
removeUser(state,action){
state.splice(action.payload,1);    
},
clearAllUser(state,action){
return [];    
},
},
});

export const {addUser,removeUser,clearAllUser}=userSlice.actions;
export default userSlice.reducer;
