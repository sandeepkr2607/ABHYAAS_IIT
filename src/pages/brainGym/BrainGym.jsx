import React, { useEffect } from "react";
import css from "./BrainGym.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import brainGym from "../../assets/brainGym.png";
import kid from "../../assets/kid.png";
import Note from "../../components/note/Note";
import { useNavigate } from "react-router-dom";

const BrainGym = () => {
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate("/form");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={css.top}>
        <div
          className={css.bg}
          style={{
            backgroundImage: `url(${brainGym})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2 className={css.courseName}>Brain Gym</h2>
          <p className={css.classes}>Class: 6th, 7th grade</p>
        </div>
        <div className={css.top_btn}>
          <button className={css.btn} onClick={onclickHandler}>
            APPLY FOR COURSE
          </button>
        </div>
      </div>
      <div className={css.middle}>
        <img src={kid} alt="" className={css.img} />
        <p className={css.text}>
          The Brain Gym for Class 6th-7th is a Comprehensive course that's
          designed for the sole purpose of Capability improvement of the
          Children's Brain in a manner that he/she can tackle the various
          Competitive Challenges of All subjects.
          <br />
          <br />
          This course shall cover Mathematics and Science upto Olympiad level
          where a student will be enabled to compete at National and
          International stage. It shall include advanced training methodologies
          of critical thinking and reasoning which will be combined with
          traditional techniques of Vedic Mathematics which will enhance their
          Computational skills and this improve the overall performance of the
          student.
          <br />
          <br />
          Limited seats only. Registration for these classes shall be through a
          common Admission Entrance Test (AET).
          <br />
          <br />
          Students are advised to make a confirmatory call to the Institute
          after Registration for the AET.{" "}
        </p>
      </div>
      <Note />
      <Footer />
    </>
  );
};

export default BrainGym;
