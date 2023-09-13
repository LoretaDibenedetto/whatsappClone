import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';
import Pusher from "pusher-js"
import { useEffect, useState } from 'react';
import { cleanup } from '@testing-library/react';
import axios from "./axios";

function App() {
  const [count, setCount] = useState(56);
  const [messages, setMessages] = useState([]);

 useEffect(()=>{
  axios.get("/api/v1/messages/sync")
  .then((response)=>{
    console.log(response.data);
  }).catch();
})


  useEffect(() =>{
    var pusher = new Pusher('4a923e7496e850c7e247', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
     setMessages([...messages, newMessage]);
    });
    
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

    console.log("effect app");
  });


  return (
    <div className="app">
  
      <div className="app_body">
      <Sidebar></Sidebar>
      <Chat></Chat>
      </div>
     
    </div>
  );
}

export default App;
