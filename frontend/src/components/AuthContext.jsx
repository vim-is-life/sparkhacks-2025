import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase';

// This is the context for the authentication
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    // Runs when user changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser
    };

    // This is the Authentication Provider
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}