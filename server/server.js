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

const path = require("path");

// confog to get .env 
dotenv.config();


// moongoose connect from  mongo docs 
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use("/images", express.static(path.join(__dirname, "public/images")));

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// multer storage 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});


// app.get('/',(req,res)=>{
//   res.send("Welcome to Homepage of CloudConnect")
// })
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

// Routing endpoints 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// listening the port 
app.listen(3001, () => {
  console.log("Backend server is running!");
});


