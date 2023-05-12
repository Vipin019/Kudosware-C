import Jobs from "../../components/jobs/Jobs";
import Preference from "../../components/preference/Preference";
import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import { useTags } from "../../context/tags";
import filter from "../../utils/Filter";
import Loader from "../../components/loader/Loader";
import { useShortProfile } from "../../context/shortProfileContext";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [auth, setAuth] = useAuth();
  const [tags, setTags] = useTags([
    "Reactjs",
    "Nodejs",
    "Javascript",
    "HTML",
    "CSS",
    "MongoDB",
  ]);
  const [shortProfile, setShortProfile] = useShortProfile();

  const getJobs = async () => {
    try {
      if (auth?.user?.idCardNo) {
        const { data } = await axios.get(
          "http://localhost:8080/api/v1/admin/job/"
        );
        if (data?.success) {
          setJobs(data?.jobs);
          setAllJobs(data?.jobs);
        }
      } else if (auth.user) {
        const id = auth.user._id;
        const { data } = await axios.get(
          "http://localhost:8080/api/v1/admin/job/" + id
        );
        if (data?.success) {
          setAllJobs(data?.jobs);
          setJobs(filter(data?.jobs, tags));
        }
      } else {
        const { data } = await axios.get(
          "http://localhost:8080/api/v1/admin/job/"
        );
        if (data?.success) {
          setJobs(data?.jobs);
          setAllJobs(data?.jobs);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, [auth]);

  useEffect(() => {
    setJobs(filter(allJobs, tags));
  }, [tags]);

  return (
    <div className="home">
      <div
        className="home__container"
        onClick={() => {
          setShortProfile("header__myShortProfile--hide");
        }}
      >
        <div className="home__preferances">
          <Preference />
        </div>
        <div className="home__jobs">
          {jobs && jobs.length ? (
            jobs.map((job) => <Jobs key={job._id} job={job} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
