const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");


//get a post

router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //create a post

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //update a post

router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Post has been Successfully Updated");
      } else {
        res.status(403).json("You can update ONLY your posts");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
  