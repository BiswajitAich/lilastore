"use client"
import { createContext, useContext, useEffect, useState } from "react"
interface ContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>("sun");
    useEffect(() => {
        setTheme(() => {
            if (typeof window === 'undefined') {
                return "sun";
            }
            const storedTheme = localStorage.getItem("lilastore");
            if (storedTheme) {
                const parsedData = JSON.parse(storedTheme);
                return parsedData.theme || "sun";
            } else {
                return "sun";
            }
        })
    }, []);

    return (
        <Context.Provider value={{ theme, setTheme }}>
            {children}
        </Context.Provider>
    )
}


export const useTheme = () => {

    const contextValue = useContext(Context);
    if (!contextValue) {
        throw new Error("ThemeProvider error");
    }
    return contextValue.theme
}