const { Schema, model } = require("mongoose");
const reactions = require('./reaction')


// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: (date) => {
    //     if (date) return date.toISOString().split("T")[0];
    //   },
    // },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactions],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Created a virtual property `reactionCount` that gets the amount of reactions per user

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;