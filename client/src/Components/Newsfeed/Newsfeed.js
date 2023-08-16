import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './newsfeed.scss'
import Share from '../share/Share'
import Post from '../Post/Post'
import { AuthContext } from '../../context/authContext';
// import  {Posts} from '../../dummyData'

export default function Newsfeed({username}) {
  const [posts,setPosts]=useState([]);
  const {user}=useContext(AuthContext);
 
    
    useEffect(()=>{
      const fetchPost= async() =>{
        const res =  username? await axios.get("/posts/profile/" + username) :await axios.get("posts/timeline/" + user._id);
        console.log(res)
        setPosts(res.data)
      };
      // console.log("Post Uploaded")
    fetchPost();
    },[username,user._id]);
  return (
    <div className='newsfeed'>
     <div className="feedwrap">
     <Share/>
   {posts.map(p=>(

      <Post key={p._id} post ={p}/>
))}
      
     </div>
    </div>
  )
}
