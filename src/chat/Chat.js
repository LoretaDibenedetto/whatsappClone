import React from 'react'
import "./Chat.css";
import { Avatar, Button, IconButton } from '@mui/material';
import { AttachFile, EmojiEmotions, MoreVert, SearchOffOutlined, SearchOutlined } from '@mui/icons-material';

function Chat({ messages }) {
  return (
    <div className='chat'>
        <div className='chat_header'>
       <Avatar></Avatar>
       <div className='chat_header_info'>
        <h3>Chat Name</h3>
        <p>visto l'ultima...</p>
       </div>

      <div className='chat_header_right'>
        <IconButton>
          <SearchOffOutlined></SearchOffOutlined>
          </IconButton>
        <IconButton>
          <AttachFile>

          </AttachFile>
        </IconButton>
        <IconButton>
          <MoreVert></MoreVert>
        </IconButton>

      </div>

        </div>
        <div className='chat_body'>
        {messages.map((message) => {
        return (
                <p className={`chat_message ${message.received && "chat_recever"} `}>
                  <span className='chat_name'>{message.name}</span>
                  {message.message} {/* Utilizza la proprietà 'text' del messaggio qui */}
                  <span className='chat_timestamp'>{message.timestamp}</span>
                </p>
              );
            })}
        </div>
        <div className='chat_footer'>
        <IconButton>
          <EmojiEmotions></EmojiEmotions>
        </IconButton>
        <form>
          <input placeholder='scrivi un messaggio..' type="text"></input>
          <Button type='submit'></Button>
        </form>
        </div>
    </div>
  )
}

export default Chat