const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findOne({ _id: context.user._id });
    //     return user;
    //   }
    // },
    User:async()=>{
        return User.find({})
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const token = signToken(user);
      return { token, user };
    },
},
};

module.exports = resolvers;
