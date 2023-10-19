import React, { useState, useEffect } from 'react';
import jsonData from "../data/data1.json";
export default function Contacts(props){
    const userId = props.idd;
    const sendId = () => {
        props.onClick(userId);
      }

      const [chates, setChates] = useState(null); 


      useEffect(() => {
      
       setTimeout(() => {
           const user = jsonData.find(user => user.id === userId);
   
           if (user) {
            const chats = user.chats;
            const lastmessage = chats[chats.length - 1];

            setChates(lastmessage.mes);
        }
       }, 100); 
     }, [userId]); 
   

      
   
function Truncate({ text, maxLength }) {
    if (text) { 
      let truncatedText = '';
  
      for (let i = 0; i < maxLength; i++) {
        if (text[i] !== undefined) { 
          truncatedText += text[i];
        }
      }
  
      if (text.length > maxLength) {
        truncatedText += '...';
      }
  
      return <span title={text}>{truncatedText}</span>;
    }
    return null; 
}

    return(

        <div className="conts">


        <div className="contact">

            <a href="#" onClick={sendId} className="nav-link px-0 pb-0 text-white">
                <div className="d-flex align-content-center">

                    <img src={props.image} className="rounded-circle" width="50" height="50" alt="" />
                    <div  className="ps-3">

                        <h6>{props.nom}</h6>
                            
                        <p className="text-white-50"> 
                         <Truncate text={chates} maxLength={25} />

                         </p>
                    </div>
                    <p className="border-0 ms-auto text-white-50 dateMessage">10/2/2023</p>
                </div>
            </a>
           
        </div>

        {/* <!-- Add more contacts here --> */}

        

        </div>   

    )
}

