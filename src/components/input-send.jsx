import React, { useEffect } from 'react';

import inputmessagefun from "../functions/inputmessagefun";

export default function InputSend(){

    useEffect(() => {
        inputmessagefun();
      }, []);

    return(

        <div className="chat-input">
        <a href="" className="text-white-50 fs-4 fw-bold me-1"><i className="bi bi-plus-lg"></i></a>
        <a href="" id="imogi" className="text-white-50 fs-4 fw-bold"><i className="bi bi-emoji-smile"></i></a>
        <input type="text" id="inputmessage" placeholder="Type a message..." />
        <button id="btn1">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet" className="SendSVG">
                <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#ffffff70" stroke="none">
                <path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
                </g>
              </svg>
        </button>
        <button id="btn2"><i className="bi bi-mic-fill fs-5 text-white-50"></i></button>
    
    </div>
       
        
    )
}

