import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Import UUID library

const IcebreakerContext = createContext();

export const IcebreakerProvider = ({ children }) => {
    const [selection, setSelection] = useState(null); // The selected icebreaker category or type
    const [favorites, setFavorites] = useState([]);   // The list of favorited icebreakers

    // Add a favorite icebreaker if it isn't already in the list
    const addFavorite = (item) => {
        const newFavorite = {
            ...item,
            favoriteId: item.favoriteId || uuidv4(),  // Use existing favoriteId or generate a new one
        };
    
        // Check if the item is already favorited
        const alreadyFavorited = favorites.some(favorite => 
            (favorite.favoriteId && favorite.favoriteId === newFavorite.favoriteId) || 
            (favorite.thirdPartyContent && favorite.thirdPartyContent === newFavorite.thirdPartyContent)
        );
    
        if (!alreadyFavorited) {
            setFavorites([...favorites, newFavorite]);  // Add the new favorite
        } else {
            console.log("Item is already in favorites");
        }
    };

    // Remove a favorite icebreaker by its id
    const removeFavorite = (itemId) => {
        setFavorites(favorites.filter(favorite => 
            favorite.favoriteId !== itemId && favorite.thirdPartyContent !== itemId
        ));
    };


    return (
        <IcebreakerContext.Provider value={{ selection, setSelection, favorites, addFavorite, removeFavorite }}>
            {children}
        </IcebreakerContext.Provider>
    );
};

// Hook to use the Icebreaker context in other components
export const useIcebreaker = () => useContext(IcebreakerContext);