import React, { createContext, useState } from 'react';
export  const FriendProvider = createContext()

const Contexts = ({children}) => {
  
const [call,setCall]=useState([])
const [text,setText]=useState([])
const [vedio,setVedio]=useState([])
const data = {
    call,setCall,
    text,setText,
    vedio,setVedio
}

    return (
        <FriendProvider.Provider value={data}>{children}</FriendProvider.Provider>
    )
};

export default Contexts;