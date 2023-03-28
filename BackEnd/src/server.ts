import cors from "cors";
import express from "express";
import { sample_locations } from "./data";

const app = express();
const port = 5001;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/locations", (req, res) => {
  res.send(sample_locations);
});

app.listen(port, () => {
  console.log("Server started on localhost:" + port);
});
