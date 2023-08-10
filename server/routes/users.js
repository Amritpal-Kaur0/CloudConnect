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

//get friends
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("👍 !! Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("Only Admin is Eligible to Delete the account!");
    }
  });
  

  
//follow a user

router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          //pushiing  userid in  users followers
          await user.updateOne({ $push: { followers: req.body.userId } });
            //pushiing  userid in Logged user's followings
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          res.status(200).json("User has been followed Succesfully");
        } else {
          res.status(403).json(" You ALREADY follow this User.");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json(" You CANNOT follow yourself.");
    }
  });
  
  

  //unfollow a user

router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });
          res.status(200).json("User has been unfollowed Successfully");
        } else {
          res.status(403).json("You DON't follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You  CAN't unfollow yourself");
    }
  });
  
  module.exports = router;
  