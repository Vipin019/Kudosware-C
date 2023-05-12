import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  applyControllerGet,
  applyControllerPost,
  resumeController,
} from "../controllers/applyController.js";
// import formidableMiddleware from "express-formidable";

//router object
const router = express.Router();

//routing
//apply-post
router.post("/apply", requireSignIn, applyControllerPost);

//get all applicants
router.get("/apply/:id", applyControllerGet);

//get resume
router.get("/resume/:id", resumeController);

export default router;
