import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAllUser } from '../store/slices/UserSlice';
import styled from 'styled-components';
const DeleteAllUser = () => {
  const dispatch=useDispatch();
  const deleteAll=()=>{
  dispatch(clearAllUser());  
  }
  return (
    <Wrapper>
    <button className="clear-btn" onClick={()=> deleteAll()}>DeleteAllUser</button>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.clear-btn{
text-transform: capitalize;
background-color: #0f88eb;
margin-top: 2rem;
cursor: pointer;
padding: 3px 3px;
}
`;

export default DeleteAllUser;