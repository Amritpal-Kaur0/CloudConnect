import React, { useContext, useRef, useState } from "react";
import "./share.scss";
import {AuthContext} from '../../context/authContext';
import axios from 'axios';

// material-ui imports 
import PermMediaSharpIcon from '@mui/icons-material/PermMediaSharp';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Share() {
  const {user}=useContext(AuthContext)
  const PF =process.env.REACT_APP_PUBLIC_FOLDER;
  const desc =useRef()

const [file,setFile]=useState(null)

const SubmitHandler= async(e)=>{
  e.preventDefault()
const newPost={
  userId:user._id,
  desc:desc.current.value
};

try{
axios.post("/posts",newPost)
}catch(err){

}
}


  return (
    <div className="ShareContainer">
      <div className="wrap">
        <div className="top">
          <img className="ProfileImg" src={user.profilePicture? PF+ user.profilePicture:PF+"nopic.jpg"} alt="" />
          <input
            type="text" ref={desc}
            placeholder={"What's in your mind ? "+ user.username +"?"}
            className="shareInput"
          />
        </div>
        <hr />
        <form className="bottom" onSubmit={SubmitHandler}>
          <div htmlFor="file" className="Options">
            <label className="shareOption">
            <PermMediaSharpIcon htmlColor="maroon" className="shareIcon"/>
                <span className="optionText">Photo Or Video</span>
                <input style={{display:"none"}}  type="file" accept=".png,.jpeg,..jpg,.webp,"  onChange={(e)=>setFile(e.target.files[0])} id="file" />
            </label>
            <div className="shareOption">
            <EmojiEmotionsSharpIcon htmlColor="blue" className="shareIcon"/>
                <span className="optionText"> Feelings</span>
            </div>
            <div className="shareOption">
            <LocationOnIcon htmlColor="green" className="shareIcon"/>
                <span className="optionText"> Location</span>
            </div>
          </div>
          <button  type="submit" >Post</button>
        </form>
      </div>
    </div>
  );
}
