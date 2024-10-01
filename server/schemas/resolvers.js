const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find(); 
    },
    user: async (parent, { userId }) => {
      return User.findById(userId); 
    },
  },

  Mutation: {
    addUser: async (parent, { name }) => {
      const user = await User.create({ name, favorites: [] }); 
      return user;
    },
    addFavorite: async (parent, { userId, favorite }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { favorites: favorite },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeFavorite: async (parent, { userId, favorite }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { favorites: favorite } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
