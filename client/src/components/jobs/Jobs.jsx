import "./Jobs.css";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useShortProfile } from "../../context/shortProfileContext";

const stringToHTML = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  return tempElement.textContent || tempElement.innerText || "";
};

const Jobs = ({ job }) => {
  const [auth, setAuth] = useAuth();
  const [shortProfile, setShortProfile] = useShortProfile();

  return (
    <div className="jobs">
      <div
        className="jobs__container"
        onClick={() => {
          setShortProfile("header__myShortProfile--hide");
        }}
      >
        <h1>{job?.position}</h1>
        <div dangerouslySetInnerHTML={{ __html: job?.discreption }}></div>
        <div className="jobs__container--skills">
          <h6>Skills Required</h6>
          <div>
            {job?.skills?.map((skill) => (
              <small>{skill}</small>
            ))}
          </div>
        </div>
        <div className="jobs__container--res">
          <h6>Responsibilities</h6>
          <div dangerouslySetInnerHTML={{ __html: job?.responsbality }}></div>
        </div>
        <div className="jobs__container--status">
          <small>{job?.countApplicant} Applicants</small>
          <small>Starting date: {job?.date?.substring(0, 10)}</small>
          <small>Pay {job?.pay}/month</small>
        </div>
        <Link
          to={
            (auth?.user?.idCardNo ? "/admin/response/" : "/user/apply/") +
            job?._id
          }
        >
          <input
            type="button"
            value={auth?.user?.idCardNo ? "See Resonses" : "Apply Now"}
            className="btn btn-d"
          />
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
