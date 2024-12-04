import express from "express";
import { pingCheck } from "../../controllers/pingController";

const router = express.Router();

router.use("/ping", pingCheck);

export default router;
