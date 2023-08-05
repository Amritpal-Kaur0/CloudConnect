const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Reaction {
  reactionId: ID!
  reactionBody: String!
  username: String!
}

# Define the Thought type
type Thought {
  _id: ID!
  thoughtText: String! 
  username: String!
  reactions: [Reaction!]! 
  reactionCount: Int! 
}

type DeletionResult {
  message: String!
}
type PostThoughtResult {
  message: String!
}

# Define the User type
type User {
  _id: ID! 
  username: String!
  email: String!
  thoughts: [Thought]!
  friends: [User]!
  friendCount: Int! 
}

# Define the Query type
type Query {
  # Fetch a single user by their ID
  getUsers: [User]
  singleUser(_id:ID!):User
  # Fetch all thoughts
  getThoughts: [Thought]!
  getSingleThought(_id:ID!):Thought!
 
}

`


module.exports = typeDefs;