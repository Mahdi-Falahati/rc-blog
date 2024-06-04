"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getFromLocalStorage());

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
