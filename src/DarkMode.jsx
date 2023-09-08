import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css" 
import { useColorScheme } from "./useColorScheme.jsx";

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();
    return (
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        aria-label="Dark mode toggle"
      />
    );
  };