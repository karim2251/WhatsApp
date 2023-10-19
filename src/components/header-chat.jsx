import React, { useState, useEffect } from 'react';
import jsonData from "../data/data1.json";

export default function HeaderChat(props){
    const userId = props.userId;
    const [user, setUser] = useState(null); 


   useEffect(() => {
   
    setTimeout(() => {
        const fetchedUser = jsonData.find(user => user.id === userId);

        setUser(fetchedUser);
    }, 100); 
  }, [userId]); 

    return(

        <div className="chat-header">
        <nav className="nav">
            {user ? (
            <a href="" className="nav-link">
                        <img src="./img/profile2.jpg" className="rounded-circle" width="50" height="50" alt="" />
                        <span className="ps-3 text-white">{user.nom}</span>

            </a>

                ) : (
                    <span className="ps-3 text-white">Loading...</span>
                )}

            <p className="nav-link ms-auto text-light" > <a href="" className="me-4"><i className="bi bi-search text-white-50 fs-5"></i></a> <a href=""><i className="bi bi-three-dots-vertical text-white-50 fs-5"></i></a> </p>
        </nav>
    </div>

    )
}