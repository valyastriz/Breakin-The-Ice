import React, { createContext, useContext, useState } from 'react';

const IcebreakerContext = createContext();

export const IcebreakerProvider = ({ children }) => {
    const [selection, setSelection] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const addFavorite = item => {
        if (!favorites.some(favorite => favorite.id === item.id)) {
            setFavorites([...favorites, item]);
        }
    };

    const removeFavorite = itemId => {
        setFavorites(favorites.filter(item => item.id !== itemId));
    };

    return (
        <IcebreakerContext.Provider value={{ selection, setSelection, favorites, addFavorite, removeFavorite }}>
            {children}
        </IcebreakerContext.Provider>
    );
};

export const useIcebreaker = () => useContext(IcebreakerContext);