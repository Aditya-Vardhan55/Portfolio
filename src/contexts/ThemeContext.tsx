import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = 'classic' | 'darkGalaxy' | 'nebula' | 'aurora' | 'sunsetCosmos' | 'dreamyPastel';

interface ThemeContextType {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeMode>('classic');

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') as ThemeMode;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('classic');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('portfolio-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};