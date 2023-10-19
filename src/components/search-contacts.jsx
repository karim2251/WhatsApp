import React, { useEffect } from 'react';
import searchfocus from '../functions/searchcontact';

export default function Searchcontact(){

    useEffect(() => {
        searchfocus();
      }, []);

    return(

        <div className="d-flex elem">
<div className="text-center" id="searchContact">
    <a href="" id="a1"><i className="bi bi-search text-white-50 "></i></a>
    <a href="" id="a2"><i className="bi bi-arrow-left-short fs-2"></i></a>
    <input id="search" type="search" name="" placeholder="Search or start new chat" />
</div>
<a href="" className="pe-2 ps-2 text-white-50"><svg viewBox="0 0 24 24" height="25" width="30" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path></svg></a>
</div>

    )
    
}

