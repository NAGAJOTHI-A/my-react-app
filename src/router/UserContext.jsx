import React, { createContext, useState } from 'react'

export const UserContext = createContext()



const UserProvider = ({children}) => {

    let [state,setState]=useState(() =>{
        let saved =localStorage.getItem("user")
        return saved? JSON.parse(saved):null
    })
    console.log(state);
    

  return (
      <UserContext.Provider value={{state,setState}}>
           {children}
      </UserContext.Provider>
  )
}

export default UserProvider

