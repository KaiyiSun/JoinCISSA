import { Router } from "express";
import { getReviewRouterPath } from "../constant";

import { reviewController } from "../../controllers";
import { passportAuth } from "../../../middleware/auth";

const router = Router();

router.post(getReviewRouterPath, reviewController.postReview);

export { router };
