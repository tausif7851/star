import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode function
    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
        // Save the theme in localStorage
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    };

    // Effect to apply dark mode to the body element based on state
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Load the initial theme from localStorage if available
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
