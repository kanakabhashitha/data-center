import express from "express";
const router = express.Router();

import { getAllAlarms } from "../controllers/alertController.js";

router.route("/").get(getAllAlarms);

export default router;
