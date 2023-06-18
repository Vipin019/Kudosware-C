import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultProfileImage from "../../images/Profile.png";
import Myshortprofile from "./layout/Myshortprofile/Myshortprofile.jsx";
import { useAuth } from "../../context/Auth";
import { useShortProfile } from "../../context/shortProfileContext";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [shortProfile, setShortProfile] = useShortProfile();

  return (
    <>
      <div className="background"></div>
      <Link to="/">
        <div className="appName">
          <h1 id="appName">Karma Careers</h1>
        </div>
      </Link>

      {auth.user ? (
        <div className="header">
          <Link to="/">
            <div className="appName">
              <h1 id="appName">Karma Careers</h1>
            </div>
          </Link>
          {auth?.user?.idCardNo && (
            <Link to="/admin/postJob">
              <div className="header__createPost">
                <input
                  className="header__createPost--button btn btn-d"
                  type="button"
                  value={"Post Job"}
                />
              </div>
            </Link>
          )}
          <div className="header__myProfile">
            <div className="header__myProfile--avatar">
              <img
                alt="Avatar"
                src={defaultProfileImage}
                onClick={() => {
                  setShortProfile(
                    shortProfile === "header__myShortProfile"
                      ? "header__myShortProfile--hide"
                      : "header__myShortProfile"
                  );
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="header">
          <Link to="/">
            <div className="appName">
              <h1 id="appName">Karma Careers</h1>
            </div>
          </Link>
          <Link to="/login">
            <div className="header__login">
              <input
                className="header__login--button btn btn-d"
                type="button"
                value={"Login"}
              />
            </div>
          </Link>
          <Link to="/register">
            <div className="header__register">
              <input
                className="header__login--button btn btn-d"
                type="button"
                value={"Register"}
              />
            </div>
          </Link>
        </div>
      )}
      {auth?.user && (
        <div
          className={shortProfile}
          onClick={() => {
            setShortProfile("header__myShortProfile--hide");
          }}
        >
          <Myshortprofile />
        </div>
      )}
    </>
  );
};

export default Header;
