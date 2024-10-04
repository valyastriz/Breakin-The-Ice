const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express'); // Correct import

const resolvers = {
  Query: {
    users: async () => {
      return User.find(); 
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('Not logged in');
    },
    favorites: async (parent, { userId }) => {
      const user = await User.findOne({ _id: userId });
      if (!user) {
        throw new Error('User not found');
      }
      return user.savedFavorites;  // Return the user's savedFavorites
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password, savedFavorites: [] });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addFavorite: async (parent, { favoriteId, thirdPartyContent, title, description }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedFavorites: { favoriteId, thirdPartyContent, title, description } } }, // Add to set to prevent duplicates
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
    removeFavorite: async (parent, { favoriteId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedFavorites: { favoriteId } } },
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;