import { useParams } from "react-router-dom";
import Footer from "../Components/FooterContainer";
import Navbar from "../Components/Navbar/Navbar";
import Newsfeed from "../Components/Newsfeed/Newsfeed";
import Rightbar from "../Components/Rightbar/Rightbar";
import Sidebar from "../Components/sidebar/Sidebar";
import "./profile.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      // console.log(res)
      setUser(res.data);
    };
    // console.log("Post Uploaded")
    fetchUser();
  }, [username]);
  return (
    <>
      <Navbar />

      <div className="profileContainer flex">
        <Sidebar />
        <div className="profileright">
          <div className="righttop">
            <div className="profileCover">
              <img
                className="ProfileCoverImg"
                src={
                  user.coverPicture ? PF + user.coverPicture : PF + "cover.webp"
                }
                alt=""
              />
              <img
                className="ProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "nopic.jpg"
                }
                alt=""
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <p className="profiledescription">{user.desc}</p>
            </div>
          </div>

          <div className="rightbottom">
            <Newsfeed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
