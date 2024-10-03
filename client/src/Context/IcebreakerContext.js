import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Import UUID library

const IcebreakerContext = createContext();

export const IcebreakerProvider = ({ children }) => {
    const [selection, setSelection] = useState(null); // The selected icebreaker category or type
    const [favorites, setFavorites] = useState([]);   // The list of favorited icebreakers

    // Add a favorite icebreaker if it isn't already in the list
    const addFavorite = item => {
        const newFavorite = {
            ...item,
            uniqueId: uuidv4(),  // Create a unique ID for each favorite
        };

        // Prevent adding duplicates based on the actual item's id or favoriteId
        if (!favorites.some(favorite => favorite.favoriteId === newFavorite.favoriteId || favorite.thirdPartyContent === newFavorite.thirdPartyContent)) {
            setFavorites([...favorites, newFavorite]); // Add the new favorite
        } else {
            console.log("Item is already in favorites");
        }
    };

    // Remove a favorite icebreaker by its uniqueId
    const removeFavorite = uniqueId => {
        setFavorites(favorites.filter(item => item.uniqueId !== uniqueId));
    };

    return (
        <IcebreakerContext.Provider value={{ selection, setSelection, favorites, addFavorite, removeFavorite }}>
            {children}
        </IcebreakerContext.Provider>
    );
};

// Hook to use the Icebreaker context in other components
export const useIcebreaker = () => useContext(IcebreakerContext);