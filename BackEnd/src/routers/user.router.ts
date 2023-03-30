import { Router } from "express";
import { sample_users } from "../data";
import { UserModel } from "../models/User.model";

const router = Router();

//update users
router.get("/seed", async (req, res) => {
  const locationCount = await UserModel.countDocuments();
  if (locationCount > 0) {
    res.send("seed is already done");
    router;
  }

  await UserModel.create(sample_users);
  res.send("Seed is done!");
});

export default router;
