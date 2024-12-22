// importing npm modules
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./controllers/todo";

// setting up express
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
const port = process.env.PORT || 3000;

// setting up the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}).on("error", (error: Error) => {
  console.error("Error starting server:", error);
});

// setting up the routes
app.use("/todos", router);

// connecting to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`connected to ${process.env.MONGO_URI}`);
  })
  .catch((error: Error) => {
    console.error("error connecting to MongoDB:", error);
  });
