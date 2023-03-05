import { Router } from "express";
import {
  getUserRouterPath,
  getAllUserRouterPath,
  registerRouterPath,
  verifyEmailAndCreateUser,
  loginRouterPath,
  updateUserRouterPath,
  emailCheckPath,
} from "../constant";

import { userController } from "../../controllers";
import { passportAuth } from "../../../middleware/auth";

const router = Router();

// router.get(getUserRouterPath, [passportAuth], userController.getUser);
router.get(getAllUserRouterPath, userController.getAllUser);
router.get(getUserRouterPath, [passportAuth], userController.getUser);

router.post(registerRouterPath, userController.registerUser);
router.post(emailCheckPath, userController.checkEmailExists);
router.post(verifyEmailAndCreateUser, userController.verifyEmailAndCreateUser);
router.post(loginRouterPath, userController.login);

router.post(updateUserRouterPath, [passportAuth], userController.updateUser);

export { router };
