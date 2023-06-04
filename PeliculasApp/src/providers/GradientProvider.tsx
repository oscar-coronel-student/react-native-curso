import { useState } from "react"
import { Colors, GradientContext } from "../context/GradientContext"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientProvider = ({ children }: Props) => {

    const [colors, setColors] = useState<Colors>({
        primary: 'transparent',
        secondary: 'transparent'
    });
    
    const [previousColors, setPreviousColors] = useState<Colors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    return <GradientContext.Provider 
        value={{
            colors,
            setColors,
            previousColors,
            setPreviousColors
        }}
    >
        { children }
    </GradientContext.Provider>
}