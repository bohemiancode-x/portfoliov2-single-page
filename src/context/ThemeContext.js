import { createContext, useReducer} from 'react'

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload}
        default:
            return state
    }
}

const mode = localStorage.getItem("mode") === null ? 'dark' : localStorage.getItem("mode");
//console.log(mode);

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        mode: mode
    })
    const changeMode = (mode) => {
        dispatch({type: 'CHANGE_MODE', payload: mode});
        localStorage.setItem("mode", mode)
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
