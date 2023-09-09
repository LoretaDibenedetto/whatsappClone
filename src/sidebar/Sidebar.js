import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from "@mui/icons-material/SearchOutlined";
import {Avatar, IconButton} from "@mui/material";
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebar_header'>
      <div className='sidebar_header_left'>
        <IconButton> <Avatar src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"></Avatar></IconButton>
       
    </div>
     <div className='sidebar_header_right'>
  
      <IconButton>
        <DonutLargeIcon></DonutLargeIcon>
      </IconButton>
      <IconButton>
        <ChatIcon></ChatIcon>
      </IconButton>
      <IconButton>
        <MoreVertIcon></MoreVertIcon>
      </IconButton>
      </div>
    
     </div>
     <div className='sidebar_search'>
      <div className='sidebar_container'>
        <SearchIcon></SearchIcon>
       <input type="text" placeholder='Cerca o inizia una nuova chat'></input>
       </div>
      </div>
      <div className='sidebar_chat'>
      <SidebarChat></SidebarChat>
      <SidebarChat></SidebarChat>
      


      </div>
 </div>


  )
}

export default Sidebar