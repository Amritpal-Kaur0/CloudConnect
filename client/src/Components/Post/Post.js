import React, { useContext, useEffect, useState } from "react";
import "./post.scss";
//axios to get real data from backend
import axios from "axios";
//timeago.js to get time in format (3hours ago)
import { format } from "timeago.js";
import { AuthContext } from "../../context/authContext";

// material-ui import
import MoreIcon from "@mui/icons-material/More";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  // like -single click and dislike on double click functionality
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
      console.log(res.data)
    };
    fetchUser();
    // console.log("Post Uploaded")
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="postContainer">
      <div className="wrapper">
        <div className="top flex items-center justify-between">
          <div className="topleft flex items-center">
            {/* using link to redirect to profile in case user click on picture  */}
            <Link to={`/profile/${user.username}`}>
              <img
                className="profileImg "
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "nopic.jpg"
                }
                alt="Profile Picute"
              />
            </Link>
            <span className="username"> {user.username}</span>
            <span className="time">{format(post.createdAt)}</span>
          </div>

          <div className="topright">
            <MoreIcon />
          </div>
        </div>
        <div className="center">
          <span className="text">{post?.desc}</span>
          <img className="PostImg" src={PF + post.img} alt="" />
        </div>
        <div className="bottom flex items-center justify-between">
          <div className="left flex items-center ">
            <img
              onClick={likeHandler}
              className="likeIcon cursor-pointer"
              src={`${PF}heart.png`}
              alt="Like button"
            />
            {/* <img
              onClick={likeHandler}
              className="likeIcon cursor-pointer"
              src={`${PF}like.png`}
              alt="Like button"
            /> */}

            <span className="likecount">{like} people liked it</span>
          </div>

          <div className="right">
            <span className="comment">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
