import "../../pages/auth/Register.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registerasdeveloper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          education,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate(location.state || "/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Fail to register try again");
    }
  };

  return (
    <div className="register">
      <h1>Register as developer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <select
          value={education}
          onChange={(e) => {
            setEducation(e.target.value);
          }}
        >
          <option value="Education">Education</option>
          <option value="Btech">Btech</option>
          <option value="Mtech">Mtech</option>
        </select>
        <input className="btn btn-l" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Registerasdeveloper;
