import React, { createContext, useContext, useState } from 'react';

const IcebreakerContext = createContext();

export const IcebreakerProvider = ({ children }) => {
    const [selection, setSelection] = useState(null); // The selected icebreaker category or type
    const [favorites, setFavorites] = useState([]);   // The list of favorited icebreakers

    // Add a favorite icebreaker if it isn't already in the list
    const addFavorite = item => {
        if (!favorites.some(favorite => favorite.id === item.id)) {
            setFavorites([...favorites, item]);
        } else {
            console.log("This item is already in your favorites."); // Optional feedback for duplicate favorites
        }
    };

    // Remove a favorite icebreaker by its id
    const removeFavorite = itemId => {
        setFavorites(favorites.filter(item => item.id !== itemId));
    };

    return (
        <IcebreakerContext.Provider value={{ selection, setSelection, favorites, addFavorite, removeFavorite }}>
            {children}
        </IcebreakerContext.Provider>
    );
};

// Hook to use the Icebreaker context in other components
export const useIcebreaker = () => useContext(IcebreakerContext);