import React from 'react';
import Lottie from 'lottie-react';
import Online from '../online/Online'
import animationData from './animation_ll9bw1xj.json'
import './rightbar.scss'
import {Users} from '../../dummyData'

export default function Rightbar({user}) {
  const PF =process.env.REACT_APP_PUBLIC_FOLDER


  const Animation=()=>{
return (
  <> <div className="top">
  <Lottie animationData={animationData}/>
</div></>
)
  };
  const HomeRightbar=()=>{
    return(
      <>
      <Animation/>
        <h4 className='OnlineTitle'>Online Friends</h4>
        {/* 1st online  */}
        <div className="bottom">
          <ul className="list">
            {Users.map(u=>
         < Online key={u.id} user={u}/>
              )}
          </ul>
        </div>
      </>
    )
  };
  const ProfileRightbar=()=>{
    return(
      <>
      <h2 className='Righttitle'>User Infromation</h2>
      <div className="rightbarInfo">
        {/* 1st item  */}
        <div className="infoItem">
          <span className="InfoKey">City-</span>
          <span className="InfoValue">{user.city}</span>
        </div>
        {/* 2nd item  */}
        <div className="infoItem">
          <span className="InfoKey">From-</span>
          <span className="InfoValue">{user.from}</span>
        </div>
        {/* 3rd item  */}
        <div className="infoItem">
          <span className="InfoKey">Relationship-</span>
          <span className="InfoValue">{user.relationship ===1?"Single":user.relationship===2 ? "Married":"-"} </span>
        </div>

        <h4 className='Righttitle'>User Friends</h4>
        <div className="folowings">
          {/* 1st following */}
          <div className="following">
            <img className='followingImg' src={`${PF}Dps/dp.jpg`} alt="" />
            <span className='followingName'>Amrit</span>
          </div>
          {/* 2nd following */}
          <div className="following">
            <img className='followingImg' src={`${PF}Dps/dp3.jpg`} alt="" />
            <span className='followingName'>Amrit</span>
          </div>
          {/* 3rd following */}
          <div className="following">
            <img className='followingImg' src={`${PF}Dps/dp2.jpg`} alt="" />
            <span className='followingName'>Amrit</span>
          </div>
        </div>
      </div>

      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="wrapper">
        {user?  <ProfileRightbar/>:  
        <HomeRightbar/>
       }
       <Animation/> 
       
     
      
      </div>

    </div>
  )
}
