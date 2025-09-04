import { useState, type ReactNode, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";

type Props = { children: ReactNode };

export default function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme")
  );

  function changeTheme(): void {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  const contextProps = {
    theme,
    changeTheme,
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme", "dark");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme", "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextProps}>
      {children}
    </ThemeContext.Provider>
  );
}
