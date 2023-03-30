import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sample_locations } from "./data";
import { UserSchema } from "./models/User.model";
import locationRouter from "./routers/location.router";
import userRouter from "./routers/user.router";
const mongoose = require("mongoose");

require("dotenv/config");

dotenv.config();
process.env.MONGO_URI;

const app = express();
const port = process.env.PORT || 5001;
const db = process.env.DB_CONNECTION;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/locations", locationRouter);
app.use("/api/users", userRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(db!)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: any) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server started on localhost:" + port);
});
