import "../../pages/auth/Register.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registerashr = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idCardNo, setIdCardNo] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://kudosware-c-vipin.onrender.com/api/v1/auth/register",
        {
          name,
          email,
          password,
          idCardNo,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data.success);
        navigate(location.state || "/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in Registration");
    }
  };

  return (
    <div className="register">
      <h1>Register as hiring team member</h1>
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
        <input
          type="password"
          placeholder="ID card no (for demo write any number)"
          value={idCardNo}
          onChange={(e) => {
            setIdCardNo(e.target.value);
          }}
        />
        <input className="btn btn-l" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Registerashr;
