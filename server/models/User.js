const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  savedFavorites: [
    {
      favoriteId: {
        type: String, 
        ref: 'Favorite', // For database-stored icebreakers
      },
      thirdPartyContent: String, // For third-party API content
      title: String,  // Store title directly
      description: String, // Store description directly
    },
  ],
}, {
  toJSON: {
    virtuals: true,
  },
});

// Hash password middleware
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Compare password method
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Virtual for the number of favorites
userSchema.virtual('favoriteCount').get(function () {
  return this.savedFavorites.length;
});

const User = model('User', userSchema);

module.exports = User;