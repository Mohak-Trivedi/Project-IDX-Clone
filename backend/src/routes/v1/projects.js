import express from "express";
import { createProjectController } from "../../controllers/projectController.js";

const router = express.Router();

router.use("/", createProjectController);

export default router;
