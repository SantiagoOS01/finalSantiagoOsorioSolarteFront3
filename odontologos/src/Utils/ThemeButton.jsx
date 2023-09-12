import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme === "light" ? "Light" : "Dark"})
    </button>
  );
};

export default ThemeSwitcher;

