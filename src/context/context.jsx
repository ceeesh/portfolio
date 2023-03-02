import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext({});

export const ContextProvider = ({children}) => {
   const [theme, setTheme] = useState(false)

   const updateTheme = () => {
    localStorage.setItem('theme', JSON.stringify(theme));
    setTheme(prevState => !prevState)
   }

  return (
    <Context.Provider value={{theme, updateTheme}}>
        {children}
    </Context.Provider>
  )
}
