import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  getAllJobsController,
  getFilteredJobController,
  getSingleJob,
  jobControllerPost,
} from "../controllers/jobController.js";

//router object
const router = express.Router();

//routing
//apply-post
router.post("/job", requireSignIn, jobControllerPost);

//get all job
router.get("/job", getAllJobsController);

//get user related job
router.get("/job/:id", requireSignIn, getFilteredJobController);

//get Single job
router.get("/singleJob/:id", getSingleJob);

export default router;
