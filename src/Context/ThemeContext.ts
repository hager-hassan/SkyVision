import { createContext } from "react";

type contextProps = {
    theme: string | null;
    changeTheme: (theme: string | null) => void;
}

export const ThemeContext = createContext <contextProps | null>(null)