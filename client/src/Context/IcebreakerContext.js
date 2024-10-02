import React, { createContext, useContext, useState } from 'react';

const IcebreakerContext = createContext();

export const IcebreakerProvider = ({ children }) => {
    const [selection, setSelection] = useState(null);

    return (
        <IcebreakerContext.Provider value={{ selection, setSelection }}>
            {children}
        </IcebreakerContext.Provider>
    );
};

// Custom hook for using this context
export const useIcebreaker = () => useContext(IcebreakerContext);