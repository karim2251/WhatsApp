import React, { useState } from 'react';
import './App.css';

import "./style/all.css";
import Header from './components/header-sidebar';
import Searchcontact from './components/search-contacts';
import Contacts from './components/contacts';
import HeaderChat from './components/header-chat';
import Messages from './components/messages';
import InputSend from './components/input-send';
import jsonData from "./data/data1.json"

function App() {



  const [selectedUserId, setSelectedUserId] = useState(null);

  const sendId = (userId) => {
    // Check if the clicked user ID is the same as the currently selected user
    if (selectedUserId === userId) {
      // If it is the same, clear the selection
      setSelectedUserId(null);
    } else {
      // If it's different, set the new selection
      setSelectedUserId(userId);
    }
  }


  return (

    <div class="containers">
       <div class="sidebar">

          <Header />

          <div class="contacts">

              <Searchcontact />
              {jsonData.map((d,i)=>(

              <Contacts key={i} idd={d.id} nom={d.nom} image={d.img} onClick={sendId} />

              ))}

          </div>
       </div>


       <div class="chat">

            <HeaderChat userId={selectedUserId} />

            <Messages userId={selectedUserId} />

            <InputSend />


       </div>

    </div>
   
  );
}



export default App;
