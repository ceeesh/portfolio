import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext({});

export const ContextProvider = ({children}) => {
   const [theme, setTheme] = useState(!localStorage.getItem('theme') ? '' : JSON.parse(localStorage.getItem('theme')))

   const updateTheme = () => {
    localStorage.setItem('theme', JSON.stringify(theme));
    setTheme(prevState => !prevState)
   }

// useEffect(() => {
//     console.log(theme)
// }, [theme])

  return (
    <Context.Provider value={{theme, updateTheme}}>
        {children}
    </Context.Provider>
  )
}
