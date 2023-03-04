import { Router } from "express";
import { getUserRouterPath, getAllUserRouterPath } from "../constant";

import { userController } from "../../controllers";
import { passportAuth } from "../../../middleware/auth";

const router = Router();

// router.get(getUserRouterPath, [passportAuth], userController.getUser);
router.get(getAllUserRouterPath, userController.getAllUser);
router.get(getUserRouterPath, userController.getUser);

export { router };
