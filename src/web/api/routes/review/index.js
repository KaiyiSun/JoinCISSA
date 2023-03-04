import { Router } from "express";
import { getReviewRouterPath } from "../constant";

import { reviewController } from "../../controllers";
import { passportAuth } from "../../../middleware/auth";

const router = Router();

router.get(getReviewRouterPath, reviewController.getReview);

export { router };
