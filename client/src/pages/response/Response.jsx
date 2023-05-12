import "./Respone.css";
import React, { useEffect, useState } from "react";
import Responsecard from "../../components/responsecard/Responsecard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useShortProfile } from "../../context/shortProfileContext";

const Response = () => {
  const [datas, setDatas] = useState();
  const [position, setPosition] = useState();
  const [shortProfile, setShortProfile] = useShortProfile();

  const { id } = useParams();

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/apply/" + id
      );
      if (data?.success) {
        setDatas(data?.job);
      } else {
        alert("Applicant data can not get");
      }
    } catch (error) {
      console.log(error);
      alert("error in getData function");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="response"
      onClick={() => {
        setShortProfile("header__myShortProfile--hide");
      }}
    >
      <h1>Resonse for {position}</h1>
      <div className="response__container">
        {!datas ||
        datas === undefined ||
        datas === null ||
        datas.length === 0 ? (
          <p style={{ textAlign: "center" }}>No response till now</p>
        ) : (
          datas.map((data) => <Responsecard key={data._id} data={data} />)
        )}
      </div>
    </div>
  );
};

export default Response;
