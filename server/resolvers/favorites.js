const { User } = require('../models'); 

const resolvers = {
  Query: {
    favorites: async (parent, { userId }) => {
      const user = await User.findById(userId);
      return user ? user.favorites : []; 
    },
  },

  Mutation: {
    addFavorite: async (parent, { userId, itemId }) => {
      const user = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { favorites: itemId } }, 
        { new: true, runValidators: true }
      );
      return { userId, itemId }; 
    },
    removeFavorite: async (parent, { userId, itemId }) => {
      const user = await User.findByIdAndUpdate(
        userId,
        { $pull: { favorites: itemId } }, // Remove favorite
        { new: true }
      );
      return { userId, itemId }; 
    },
  },
};
module.exports = resolvers;