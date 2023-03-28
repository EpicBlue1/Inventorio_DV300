import cors from "cors";
import express from "express";

const app = express();
const port = 5001;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.listen(port, () => {
  console.log("Server started on localhost:" + port);
});
