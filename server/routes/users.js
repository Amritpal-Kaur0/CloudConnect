const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");



//get a user
router.get("/:id", async (req, res) => {
    try{
        const user =await User.findById(req.params.id);
          const { password, updatedAt, ...other } = user._doc;
          res.status(200).json(other);
          } catch (err) {
            res.status(500).json(err);
          }
      
    });



    //update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json(" BOOM !!  Your Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("Only ADMIN of this profile can update the Information!");
    }
  });