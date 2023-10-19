import React, { useState, useEffect } from 'react';
import jsonData from "../data/data1.json";

export default function Messages(props){

    const userId = props.userId;
    const [chates, setChats] = useState(null); 

    useEffect(() => {
   
        setTimeout(() => {
            const user = jsonData.find(user => user.id === userId);

            if (user) {
                setChats(user.chats);
            }
        }, 100); 
      }, [userId]);

    return(

        <div className="chat-messages text-white">
        {/* <!-- Chat messages go here --> */}
        {chates ? (
                chates.map((chat, index) => {
                    return (
                        <div key={index} className={`message ${chat.status === "out" ? "out" : "in"}`}>
                            <p>{chat.mes}</p>
                        </div>
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
       
    </div>


    )
}