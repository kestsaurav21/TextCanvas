import { createContext, useState } from "react";


const AppContext = createContext();

const AppProvider = ({children}) => {


    const [ user, setUser ] = useState(null);

    const [ showLogin, setShowLogin ] = useState(false)

    const value = {
        user, setUser, showLogin, setShowLogin
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}