import React, { createContext, useContext, useState } from 'react';

const BingoContext = createContext();

export const BingoProvider = ({ children }) => {
    const [selection, setSelection] = useState(null); // The selected Bingo category or type
    

    return (
        <BingoContext.Provider value={{ selection, setSelection }}>
            {children}
        </BingoContext.Provider>
    );
};

// Hook to use the Bingo context in other components
export const useBingo = () => {
  const context = useContext(BingoContext);
  if (!context) {
      throw new Error('useBingo must be used within a BingoProvider'); // Error handling
  }
  return context;
};