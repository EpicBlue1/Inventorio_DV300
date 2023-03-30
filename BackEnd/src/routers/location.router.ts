import { Router } from "express";
import { sample_locations } from "../data";
import { LocationModel } from "../models/Locations.model";

const router = Router();

router.get("/seed", async (req, res) => {
  const locationCount = await LocationModel.countDocuments();
  if (locationCount > 0) {
    res.send("seed is already done");
    router;
  }

  await LocationModel.create(sample_locations);
  res.send("Seed is done!");
});

//get all locations
router.get("/", (req, res) => {
  res.send(sample_locations);
});

export default router;
