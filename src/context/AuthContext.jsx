import { useState } from "react";
import { AuthContext } from "./createContext";
import { Login, Register } from "../req/Auth";

export const AuthProvider = ({children}) => {  //Envuelve a todos desde el index //Traducir luego
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSignup = async (user) => {
        let res = await Register(user);
        setIsAuthenticated(true);
        return(res);
    }

    const handleLogin = async (user) => {
        let res = await Login(user);
        setIsAuthenticated(true);
        return(res);
    }

    return(
        <AuthContext.Provider
        value={{
            handleSignup,
            handleLogin,
            isAuthenticated,            
        }}>
            {children}
        </AuthContext.Provider>
    )
}