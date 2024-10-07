import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Import UUID library

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // The selected icebreaker category or type
    const [user, setUser] = useState({}); // The selected icebreaker category or type

    const login = () => {
        
    }

    const logout = () => {

    }


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use the Icebreaker context in other components
export const useAuth = () => useContext(AuthContext);