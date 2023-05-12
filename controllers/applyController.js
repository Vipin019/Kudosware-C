import mongoose from "mongoose";
import applyModel from "../models/applyModel.js";
import fs from "fs";

//apply job
export const applyControllerPost = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contactNo,
      address,
      country,
      state,
      pinCode,
      collegeName,
      degree,
      major,
      job,
      user,
    } = req.fields; // contains non-file fields
    const { resume } = req.files; // contains files

    //find existing user
    const exUser = await applyModel.find({ email });

    if (exUser.length > 0) {
      return res.status(403).send({
        success: false,
        message: "You have already applyed",
      });
    }

    //save
    const applicant = await new applyModel({
      firstName,
      lastName,
      email,
      contactNo,
      address,
      country,
      state,
      pinCode,
      collegeName,
      degree,
      major,
      job,
      user,
    });

    if (resume) {
      applicant.resume.data = fs.readFileSync(resume.path);
      applicant.resume.contentType = resume.type;
    }
    await applicant.save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      applicant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Can not apply",
      error,
    });
  }
};

export const applyControllerGet = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await applyModel
      .find({ job: id })
      .populate("job")
      .populate("user");
    job.reverse();
    return res.status(200).send({
      success: true,
      message: "All applicant",
      job,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in applyControllerGet",
    });
  }
};

//get resume
export const resumeController = async (req, res) => {
  try {
    const applicant = await applyModel.findById(req.params.id).select("resume");
    if (applicant.resume.data) {
      res.set("Content-type", applicant.resume.contentType);
      return res.status(200).send(applicant.resume.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in resumeController",
      error,
    });
  }
};
