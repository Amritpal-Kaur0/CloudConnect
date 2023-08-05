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
  # get all Users
  getUsers: [User]
  
  # Fetch a single user by their ID
  singleUser(_id:ID!):User
  
  # Fetch all thoughts
  getThoughts: [Thought]!
  
  
  # Fetch a single THougt by their ID
  getSingleThought(_id:ID!):Thought!
 
}
# Define the Mutation type
type Mutation {
  # Create a new user
  createUser(username: String!, email: String!, password:String!): User!

  # update user 
  updateUser(_id: ID!, username: String!, email: String!): User!
}

`


module.exports = typeDefs;