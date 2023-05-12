import { useTags } from "../../context/tags";
import "./Preference.css";
import React, { useState } from "react";
import find from "../../utils/Find";
import { useShortProfile } from "../../context/shortProfileContext";

const Preference = () => {
  const [tags, setTags] = useTags([
    "Reactjs",
    "Nodejs",
    "Javascript",
    "HTML",
    "CSS",
    "MongoDB",
  ]);
  const [shortProfile, setShortProfile] = useShortProfile();

  const [tempTag, setTempTag] = useState([]);
  const [tagClass1, setTagClass1] = useState("preference__container__input--l");
  const [tagClass2, setTagClass2] = useState("preference__container__input--l");
  const [tagClass3, setTagClass3] = useState("preference__container__input--l");
  const [tagClass4, setTagClass4] = useState("preference__container__input--l");
  const [tagClass5, setTagClass5] = useState("preference__container__input--l");
  const [tagClass6, setTagClass6] = useState("preference__container__input--l");

  const handleOnTagClick = (e) => {
    if (find(e.target.value, tempTag)) {
      let temp = [];
      for (let i = 0; i < tempTag.length; i++) {
        if (!(tempTag[i] === e.target.value)) {
          temp.push(tempTag[i]);
        }
      }
      setTempTag(temp);
      setTags(temp);
      if (temp.length === 0) {
        setTags(["Reactjs", "Nodejs", "Javascript", "HTML", "CSS", "MongoDB"]);
      }
    } else {
      let temp = [];
      for (let i = 0; i < tempTag.length; i++) {
        temp.push(tempTag[i]);
      }
      temp.push(e.target.value);
      setTempTag(temp);
      setTags(temp);
    }
  };

  return (
    <div className="preference">
      <h1>Preferences</h1>
      <div
        className="preference__container"
        onClick={() => {
          setShortProfile("header__myShortProfile--hide");
        }}
      >
        <input
          className={tagClass1}
          type="button"
          value="Reactjs"
          onClick={handleOnTagClick}
          onMouseDown={() => {
            setTagClass1(
              tagClass1 === "preference__container__input--l"
                ? "preference__container__input--d"
                : "preference__container__input--l"
            );
          }}
        />
        <input
          className={tagClass2}
          type="button"
          value="Nodejs"
          onClick={handleOnTagClick}
          onMouseDown={() => {
            setTagClass2(
              tagClass2 === "preference__container__input--l"
                ? "preference__container__input--d"
                : "preference__container__input--l"
            );
          }}
        />
        <input
          className={tagClass3}
          type="button"
          value="HTML"
          onClick={handleOnTagClick}
          onMouseDown={() => {
            setTagClass3(
              tagClass3 === "preference__container__input--l"
                ? "preference__container__input--d"
                : "preference__container__input--l"
            );
          }}
        />
        <input
          className={tagClass4}
          type="button"
          value="Javascript"
          onClick={handleOnTagClick}
          onMouseDown={() => {
            setTagClass4(
              tagClass4 === "preference__container__input--l"
                ? "preference__container__input--d"
                : "preference__container__input--l"
            );
          }}
        />
        <input
          className={tagClass5}
          type="button"
          value="CSS"
          onClick={handleOnTagClick}
          onMouseDown={() => {
            setTagClass5(
              tagClass5 === "preference__container__input--l"
                ? "preference__container__input--d"
                : "preference__container__input--l"
            );
          }}
        />
        <input
          className={tagClass6}
          type="button"
          value="MongoDB"
          onClick={handleOnTagClick}
          onMouseDown={() => {
            setTagClass6(
              tagClass6 === "preference__container__input--l"
                ? "preference__container__input--d"
                : "preference__container__input--l"
            );
          }}
        />
      </div>
    </div>
  );
};

export default Preference;
