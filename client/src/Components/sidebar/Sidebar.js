import React from 'react'
import './sidebar.scss'
import Friend from '../Friend/Friend';
import {Users} from '../../dummyData'


// material -ui imports 
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import VideoCallIcon from '@mui/icons-material/VideoCall';

export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarwrap">
    <ul className="list">
      <li className="listItem">
      <RssFeedIcon className='listIcon'/>
      <span className="listItemtext">Feed</span>
      </li>
      <li className="listItem">
      <ChatBubbleOutlineIcon className='listIcon'/>
      <span className="listItemtext">Chats</span>
      </li>
      <li className="listItem">
      <GroupsIcon className='listIcon'/>
      <span className="listItemtext">Groups</span>
      </li>
      <li className="listItem">
      <EventAvailableIcon className='listIcon'/>
      <span className="listItemtext">EventFinderr</span>
      </li>
      <li className="listItem">
      <BedroomParentIcon className='listIcon'/>
      <span className="listItemtext">Rentals</span>
      </li>
      <li className="listItem">
      <VideoCallIcon className='listIcon'/>
      <span className="listItemtext">Videos</span>
      </li>
      <li className="listItem">
      <HelpIcon className='listIcon'/>
      <span className="listItemtext">Questions?</span>
      </li>
    </ul>
   <hr />
   <ul className="friendlist">
{Users.map(u=>
    <Friend  key={u.id} user={u}/>
  )}
   
 
   </ul>
     </div>

    </div>
  )
}
