import express from "express";
const router = express.Router();

import {
  createDevice,
  getAllDeviceData,
} from "../controllers/deviceController.js";

router.route("/").post(createDevice).get(getAllDeviceData);

export default router;
