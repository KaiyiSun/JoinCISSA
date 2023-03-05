import { Router } from "express";
import {
  analyzeFilePath,
  getAllFilePath,
  newFilePath,
  updateFilePath,
} from "../constant";

import { fileController } from "../../controllers";
import { passportAuth } from "../../../middleware/auth";

const router = Router();

router.post(analyzeFilePath, [passportAuth], fileController.analyzeFile);
router.post(getAllFilePath, [passportAuth], fileController.getAllFile);
router.post(newFilePath, [passportAuth], fileController.newFile);
router.post(updateFilePath, [passportAuth], fileController.updateFile);

export { router };
