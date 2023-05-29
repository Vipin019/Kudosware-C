import "./Responsecard.css";
import React from "react";
import profile from "../../../src/images/Profile.png";
import { TbFileDownload } from "react-icons/tb";
import { Link } from "react-router-dom";

const Responsecard = ({ data }) => {
  console.log(data);
  return (
    <div className="responseCard">
      <div className="responseCard__container">
        <img alt="avatar" src={profile} />
        <h1>{data?.firstName + " " + data?.lastName}</h1>
        <p>{data?.email}</p>
        <p>{data?.contactNo}</p>
        <Link to={"/api/v1/user/resume/" + data._id}>
          <TbFileDownload className="responseCard__container--icon" />
        </Link>
      </div>
    </div>
  );
};

export default Responsecard;
