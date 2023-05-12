import "./Apply.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useShortProfile } from "../../context/shortProfileContext";

const Apply = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [resume, setResume] = useState();

  const [auth, setAuth] = useAuth();
  const [position, setPosition] = useState();
  const [shortProfile, setShortProfile] = useShortProfile();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const applicantData = new FormData();
      applicantData.append("firstName", firstName);
      applicantData.append("lastName", lastName);
      applicantData.append("email", email);
      applicantData.append("contactNo", contactNo);
      applicantData.append("address", address);
      applicantData.append("country", country);
      applicantData.append("state", state);
      applicantData.append("pinCode", pinCode);
      applicantData.append("collegeName", collegeName);
      applicantData.append("degree", degree);
      applicantData.append("major", major);
      applicantData.append("job", id);
      applicantData.append("user", auth?.user?._id);
      applicantData.append("resume", resume);

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/apply",
        applicantData
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Can not appply");
    }
  };
  // useEffect(async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "http://localhost:8080/api/v1/admin/job/" + id
  //     );
  //     if (data?.success) {
  //       setPosition(data.job.position);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error("Can not load properly");
  //   }
  // }, []);

  return (
    <div
      className="apply"
      onClick={() => {
        setShortProfile("header__myShortProfile--hide");
      }}
    >
      <div
        className="apply__container"
        onClick={() => {
          setShortProfile("header__myShortProfile--hide");
        }}
      >
        <h1>Form Details</h1>
        <h2>Applying for {position}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="tel"
              placeholder="Contact number"
              value={contactNo}
              onChange={(e) => {
                setContactNo(e.target.value);
              }}
            />
          </div>
          <input
            type="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <div>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Pin code"
              value={pinCode}
              onChange={(e) => {
                setPinCode(e.target.value);
              }}
            />
          </div>
          <input
            type="text"
            placeholder="Enter yor college name"
            value={collegeName}
            onChange={(e) => {
              setCollegeName(e.target.value);
            }}
          />
          <div>
            <input
              type="text"
              placeholder="Degree"
              value={degree}
              onChange={(e) => {
                setDegree(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Major"
              value={major}
              onChange={(e) => {
                setMajor(e.target.value);
              }}
            />
          </div>
          <label className="btn btn-l">
            {resume ? resume.name : "Upload Resume"}
            <input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0])}
              hidden
            />
          </label>
          <input type="submit" value="Submit" className="btn btn-l" />
        </form>
      </div>
    </div>
  );
};

export default Apply;
