import "./Myshortprofile.css";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Myshortprofile = () => {
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="myShortProfile">
        <div className="myShortProfile__logout">
          <p
            onClick={() => {
              localStorage.removeItem("auth");
              setAuth({
                user: null,
                token: "",
              });
              toast.success("Logout Successfully");
            }}
          >
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Myshortprofile;
