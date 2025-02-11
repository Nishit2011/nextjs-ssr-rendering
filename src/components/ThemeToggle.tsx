// components/ThemeToggle.tsx
"use client"; // This component uses hooks and must run on the client

import React from "react";
import { useTheme } from "../context/theme-provider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: "1rem",
        background: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#333" : "#f0f0f0",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme} style={{ padding: "0.5rem 1rem" }}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
