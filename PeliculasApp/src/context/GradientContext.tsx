import { createContext } from "react";

export interface Colors {
    primary: string
    secondary: string
}

export interface GradientContextProps {
    colors: Colors
    setColors: React.Dispatch<React.SetStateAction<Colors>>
    previousColors: Colors
    setPreviousColors: React.Dispatch<React.SetStateAction<Colors>>
}

export const GradientContext = createContext<GradientContextProps>({} as GradientContextProps);