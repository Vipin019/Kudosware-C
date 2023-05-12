import jobModel from "../models/jobModel.js";
import userModel from "../models/userModel.js";

//post job
export const jobControllerPost = async (req, res) => {
  try {
    const { position, date, discreption, skills, responsbality, education } =
      req.body;
    //save
    const job = await new jobModel({
      position,
      date,
      discreption,
      skills,
      education,
      responsbality,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Job created Successfully",
      job,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in jobControllerPost",
      error,
    });
  }
};

//get all jobs
export const getAllJobsController = async (req, res) => {
  try {
    let jobs = await jobModel.find();
    jobs.reverse();
    return res.status(200).send({
      success: true,
      message: "All jobs",
      jobs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getAllJobsController",
      error,
    });
  }
};

//get all jobs related to user

export const getFilteredJobController = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.find({ _id: id });
    const education = user[0].education;
    let jobs = await jobModel.find({
      $and: [{ education: education }, { user: { $ne: id } }],
    });
    jobs.reverse();
    return res.status(200).send({
      success: true,
      message: "Jobs related to user",
      jobs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getFilteredJobController",
      error,
    });
  }
};

// get singleJob

export const getSingleJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await jobModel.find({ _id: id });
    return res.status(200).send({
      success: true,
      message: "Jobs related to user",
      job,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getSingleJob",
      error,
    });
  }
};
