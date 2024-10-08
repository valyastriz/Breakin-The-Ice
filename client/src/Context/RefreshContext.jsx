import React, { createContext, useState, useContext } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [selection, setSelection] = useState(null);

    const refreshPage = () => {
        setSelection(null); // This will trigger re-render or re-fetch in Results
    };

    return (
        <PageContext.Provider value={{ selection, setSelection, refreshPage }}>
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => useContext(PageContext);