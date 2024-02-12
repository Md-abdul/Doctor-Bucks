
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const patientRouter = require("./routes/patientRouter")

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://mdabdulq62:nadim123@cluster0.mjympox.mongodb.net/crud?retryWrites=true&w=majority`
    );
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};

app.get("/", async (req,res) => {
    
})

app.use("/user", router)
app.use("/post", postRoutes)
app.use("/patient", patientRouter)
app.listen(3020, () => {
  connect();
  console.log("server is running");
});


//server url
// mongodb+srv://mdabdulq62:nadim123@cluster0.mjympox.mongodb.net/abdulusers?retryWrites=true&w=majority