import { createContext, useState } from "react";

export const ThemeContext = new createContext({})

const ThemeContextProvider = ({children}) => {
    const storedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(storedTheme || 'dark')

    const toggleTheme = () => {
        const toggle = theme === 'dark' ? 'light' : 'dark'
        setTheme(toggle)
        localStorage.setItem('theme', toggle)
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeContextProvider