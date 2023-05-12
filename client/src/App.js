import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Apply from "./pages/apply/Apply";
import Postjob from "./pages/postjob/Postjob";
import Response from "./pages/response/Response";
import PrivateRoute from "./route/Priveroute";
import Adminroute from "./route/Adminroute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="apply/:id" element={<Apply />} />
        </Route>
        <Route path="/admin" element={<Adminroute />}>
          <Route path="postJob" element={<Postjob />} />
          <Route path="response/:id" element={<Response />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
