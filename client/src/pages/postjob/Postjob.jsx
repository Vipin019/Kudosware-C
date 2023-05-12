import "./Postjob.css";
import React, { useState } from "react";
import axios from "axios";
import find from "../../utils/Find";
import { useShortProfile } from "../../context/shortProfileContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Postjob = () => {
  const [position, setPosition] = useState();
  const [date, setDate] = useState();
  const [discreption, setDiscreption] = useState();
  const [skills, setSkills] = useState([]);
  const [responsbality, setResponsability] = useState();
  const [education, setEducation] = useState("");
  const [shortProfile, setShortProfile] = useShortProfile();

  const [tagClass1, setTagClass1] = useState("postJob__container__input--l");
  const [tagClass2, setTagClass2] = useState("postJob__container__input--l");
  const [tagClass3, setTagClass3] = useState("postJob__container__input--l");
  const [tagClass4, setTagClass4] = useState("postJob__container__input--l");
  const [tagClass5, setTagClass5] = useState("postJob__container__input--l");
  const [tagClass6, setTagClass6] = useState("postJob__container__input--l");

  const handleSkillChange = (e) => {
    const temp = [];
    if (find(e.target.value, skills)) {
      for (let i = 0; i < skills.length; i++) {
        if (!(skills[i] === e.target.value)) {
          temp.push(skills[i]);
        }
      }
    } else {
      for (let i = 0; i < skills.length; i++) {
        temp.push(skills[i]);
      }
      temp.push(e.target.value);
    }
    setSkills(temp);
    console.log(skills);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://kudosware-c-vipin.onrender.com/api/v1/admin/job",
        {
          position,
          date,
          discreption,
          skills,
          education,
          responsbality,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Job can not create");
    }
  };
  return (
    <div className="postjob">
      <div
        className="postjob__container"
        onClick={() => {
          setShortProfile("header__myShortProfile--hide");
        }}
      >
        <h1>Post Job</h1>
        <form onSubmit={handleSubmit}>
          <div className="postjob__container--head">
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
            <input
              type="date"
              placeholder="Starting date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <textarea
            type="text"
            placeholder="Discreption"
            value={discreption}
            onChange={(e) => {
              setDiscreption(e.target.value);
            }}
          />
          <div className="postjob__container--skills">
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
            <input
              className={tagClass1}
              type="button"
              value={"Reactjs"}
              onClick={handleSkillChange}
              onMouseDown={() => {
                setTagClass1(
                  tagClass1 === "postJob__container__input--l"
                    ? "postJob__container__input--d"
                    : "postJob__container__input--l"
                );
              }}
            />
            <input
              className={tagClass2}
              type="button"
              value={"Nodejs"}
              onClick={handleSkillChange}
              onMouseDown={() => {
                setTagClass2(
                  tagClass2 === "postJob__container__input--l"
                    ? "postJob__container__input--d"
                    : "postJob__container__input--l"
                );
              }}
            />
            <input
              className={tagClass4}
              type="button"
              value={"Javascript"}
              onClick={handleSkillChange}
              onMouseDown={() => {
                setTagClass4(
                  tagClass4 === "postJob__container__input--l"
                    ? "postJob__container__input--d"
                    : "postJob__container__input--l"
                );
              }}
            />
            <input
              className={tagClass3}
              type="button"
              value={"HTML"}
              onClick={handleSkillChange}
              onMouseDown={() => {
                setTagClass3(
                  tagClass3 === "postJob__container__input--l"
                    ? "postJob__container__input--d"
                    : "postJob__container__input--l"
                );
              }}
            />
            <input
              className={tagClass5}
              type="button"
              value={"CSS"}
              onClick={handleSkillChange}
              onMouseDown={() => {
                setTagClass5(
                  tagClass5 === "postJob__container__input--l"
                    ? "postJob__container__input--d"
                    : "postJob__container__input--l"
                );
              }}
            />
            <input
              className={tagClass6}
              type="button"
              value={"MongoDB"}
              onClick={handleSkillChange}
              onMouseDown={() => {
                setTagClass6(
                  tagClass6 === "postJob__container__input--l"
                    ? "postJob__container__input--d"
                    : "postJob__container__input--l"
                );
              }}
            />
          </div>
          <textarea
            type="text"
            placeholder="Responsability"
            value={responsbality}
            onChange={(e) => {
              setResponsability(e.target.value);
            }}
          />
          <input type="submit" value={"Post"} className="btn btn-d" />
        </form>
      </div>
    </div>
  );
};

export default Postjob;
