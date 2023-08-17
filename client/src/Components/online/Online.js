import React from 'react'
import './online.scss'

export default function Online({user}) {
  const PF =process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <li className='Friend'>
              <div className="friendContainer">
                <img className='ProfileImg' src={PF+user.profilePicture} alt="" />
                <span className='OnlineFriend'></span>
              </div>
                <span className="Online">{user.username}</span>
            </li>
    </>
  )
}
