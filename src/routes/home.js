import { Router } from "express";

const router = Router();

router.get("/home", [], (req, res, next) => {
  return res
    .status(200)
    .json({ message: "unihack test haha", name: "James Xu" });
});
export const routes = [router];
// return router;
