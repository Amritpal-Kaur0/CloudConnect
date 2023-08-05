const { Schema, model } = require("mongoose");
const bcrypt =require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique:true,
      required: true,
      trim:true
    },
    email: {
      type: String,
      unique:true,
      required: true,
      match: /.+\@.+\..+/,
    },
    password:{
      type:String,
      required:true,
    },
    thoughts:[{
      type:Schema.Types.ObjectId,
      ref:'thoughts'
    }],
    friends:[{
      type:Schema.Types.ObjectId,
      ref:'User'
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;