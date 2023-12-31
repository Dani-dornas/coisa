import { useEffect, useState } from "react"
import { AuthContext } from "./Authcontext"
import { UsersProps } from "../../../types/index"
import { useApi } from "../../hooks/useApi"

export const AuthProvider = ({ children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<UsersProps | null>(null)
    const api = useApi();

    useEffect(()=>{
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const data = await api.validateToken(storageData);
                if(data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);
    
    const signin = async (email: string) => {
        const data = await api.signin(email);
        if(data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }
    const signout = async () => {
        await api.logout();
        setUser(null);
        setToken('');
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}