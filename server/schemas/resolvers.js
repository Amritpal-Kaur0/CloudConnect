const { User, Thought } = require("../models");
const { AuthenticationError, ApolloError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error("Failed to fetch users.");
      }
    },

    // Get a single user by its ID
    singleUser: async (_, { _id }) => {
      try {
        console.log("Received userId", _id);
        const user = await User.findById(_id).populate("thoughts");
        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      } catch (err) {
        throw new ApolloError();
      }
    },

    // Get all thoughts
    getThoughts: async () => {
      try {
        const thoughts = await Thought.find();
        return thoughts;
      } catch (err) {
        throw new Error("Failed to fetch thoughts.");
      }
    },

    // Get a single thought by its ID
    getSingleThought: async (_, { _id }) => {
      try {
        const thought = await Thought.findById(_id);
        if (!thought) {
          throw new Error("Thought not found.");
        }
        return thought;
      } catch (err) {
        throw new Error("Failed to fetch thought.");
      }
    },
  },

  Thought: {
    // Resolve the virtual property 'reactionCount' for Thought type
    reactionCount: (parent) => parent.reactions.length,
  },

  User: {
    //  virtual property 'friendCount' for User type
    friendCount: (parent) => parent.friends.length,

    //  'thoughts' field for the User type
    thoughts: async (parent) => {
      try {
        const user = await User.findById(parent._id).populate("thoughts");
        return user.thoughts;
      } catch (err) {
        throw new Error("Failed to fetch thoughts for user.");
      }
    },

    //  'friends' field for the User type
    friends: async (parent) => {
      try {
        const user = await User.findById(parent._id);
        const friends = user.friends;
        const friend = await User.find({ _id: { $in: friends } });
        return friend;
      } catch (err) {
        throw new ApolloError(
          "Failed to fetch friends for the user.",
          "FRIENDS_FETCH_ERROR"
        );
      }
    },
  },

  //Mutations here
  Mutation: {
    // Create a new user
    createUser: async (_, { username, email, password }) => {
      try {
        const newUser = await User.create({ username, email, password });
        return newUser;
      } catch (err) {
        throw new Error("Failed to create user.");
      }
    },


     // Update a user
 updateUser: async (_, { _id, username, email }) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { username, email },
      { runValidators: true, new: true }
    );
    if (!updatedUser) {
      throw new Error('User not found.');
    }
    return updatedUser;
  } catch (err) {
    throw new Error('Failed to update user.');
  }
},
addFriend: async (_, { _id, friendId }) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { $push: { friends: friendId } },
      { new: true }
    );
    return updatedUser;
  } catch (err) {
    throw new Error('Failed to add friend.');
  }
},
  },
};

module.exports = resolvers;
