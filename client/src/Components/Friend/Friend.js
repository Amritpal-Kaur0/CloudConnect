import React from 'react'
import './friend.scss'

export default function Friend({user}) {
  const PF =process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <li className="friend">
     <img src={ PF+user.profilePicture} alt="" className="friendimg" />
     <span className="friendname">{user.username}</span>
    </li>
    </>
  )
}
