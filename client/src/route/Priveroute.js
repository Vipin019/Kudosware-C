import { useState, useEffect } from "react";
import { useAuth } from "../context/Auth";
import { Outlet } from "react-router-dom"; //use for nested routes
import axios from "axios";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        "https://kudosware-c-vipin.onrender.com/api/v1/auth/user-auth"
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? (
    <Outlet />
  ) : (
    <h1 style={{ marginTop: "6rem", textAlign: "center" }}>
      You are not login
    </h1>
  );
}
