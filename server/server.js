// Imports 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const router = express.Router();

// Route imports 
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const path = require("path");


// config to get .env 
dotenv.config();

// moongoose connect got from mongo docs 
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
//to server static files
app.use("/images", express.static(path.join(__dirname, "public/images")));

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// multer setup for storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});


const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});
// app.get('/',(req,res)=>{
//   res.send("Welcome to Homepage of CloudConnect")
// })

// Routing endpoints 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// listening  to the port 
app.listen(3001, () => {
  console.log("Backend server is running!");
});


