import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    colors: {
      background: isDark ? "#121212" : "#f5f6fa",
      text: isDark ? "#ffffff" : "#2c3e50",
      card: isDark ? "#1a1a1a" : "#ffffff",
      primary: isDark ? "#3498db" : "#2c3e50",
    },
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
