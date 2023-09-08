import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';


function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebar_header'>
      <div className='sidebar_header_left'>
        <h1 > header  1</h1>
    </div>
     <div className='sidebar_header_right'>
       <h1 > header 2 </h1>

      <ChatIcon></ChatIcon>

      </div>
     </div>
 </div>


  )
}

export default Sidebar