import "./rightbar.scss";
import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import Online from "../online/Online";
import animationData from "./animation_ll9bw1xj.json";
import { Users } from "../../dummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));
  
// useEffect(()=>{
//   setFollowed(currentUser.followings.includes(user?.id));
// },[currentUser,user.id])


  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const followbtn = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

  const Animation = () => {
    return (
      <>
        {" "}
        <div className="top">
          <Lottie animationData={animationData} />
        </div>
      </>
    );
  };
  const HomeRightbar = () => {
    return (
      <>
        <Animation />
        {/* <h4 className="OnlineTitle">Online Friends</h4> */}
        {/* 1st online  */}
        <div className="bottom">
          {/* <ul className="list">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul> */}
        </div>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="followbtn" onClick={followbtn}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}

        <h2 className="Righttitle">User Infromation</h2>
        <div className="rightbarInfo">
          {/* 1st item  */}
          <div className="infoItem">
            <span className="InfoKey">City :-</span>
            <span className="InfoValue">{user.city}</span>
          </div>
          {/* 2nd item  */}
          <div className="infoItem">
            <span className="InfoKey">From :-</span>
            <span className="InfoValue">{user.from}</span>
          </div>
          {/* 3rd item  */}
          <div className="infoItem">
            <span className="InfoKey">Relationship-</span>
            <span className="InfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>

          <h4 className="Righttitle">User Friends</h4>
          <div className="folowings">
            {/* 1st following */}
            <div className="following">
              {friends.map((friend) => (
                <Link to={"/profile/" + friend.username}>
                  <>
                    <img
                      className="followingImg"
                      src={
                        friend.profilePicture
                          ? PF + friend.profilePicture
                          : PF + "nopic.jpg"
                      }
                      alt=""
                    />
                    <span className="followingName">{friend.username}</span>
                  </>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
        <Animation />
      </div>
    </div>
  );
}
