import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';
import Pusher from "pusher-js"
import { useEffect } from 'react';
import { cleanup } from '@testing-library/react';

function App() {
 
  useEffect(() =>{
    var pusher = new Pusher('4a923e7496e850c7e247', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });

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
