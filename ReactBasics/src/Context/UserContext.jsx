import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
    const user = "Shashwat"
  return (
    <DataContext.Provider value={ user}>
         {children}
    </DataContext.Provider>
  )
}

export default UserContext