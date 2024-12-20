import React, { createContext } from 'react';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const contextData={
        name:'mahin',
        age:20
    }
    return (
        <div>
            <h1>Auth P</h1>
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;