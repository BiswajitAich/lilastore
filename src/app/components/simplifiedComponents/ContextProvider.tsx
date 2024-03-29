"use client"
import { createContext, useState } from "react"
interface ContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const Context = createContext<ContextType|null>(null);
export default function ContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>(()=>{
        if(typeof window === 'undefined'){
            return "Sun";
        }
        const storedTheme = localStorage.getItem("lilastore.theme");
        return storedTheme ? storedTheme : "sun";
    })
    return (
        <Context.Provider value={{ theme, setTheme }}>
            {children}
        </Context.Provider>
    )
}