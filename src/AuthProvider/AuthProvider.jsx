import React, { createContext } from 'react';

export const AuthContext=createContext(null)
const AuthProvider = () => {

    return (
        <div>
            <h1>Auth P</h1>
            <AuthContext.Provider value={contextData}>

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;