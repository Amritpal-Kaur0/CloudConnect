const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Signup 
router.post("/register", async (req, res) => {
  try {
    //generate bcrypt password and salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user/signup
    const newUser =  new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
 
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});



module.exports = router;