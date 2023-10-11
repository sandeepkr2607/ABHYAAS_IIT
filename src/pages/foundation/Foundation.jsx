import React, { useEffect } from "react";
import css from "./Foundation.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import foundetion from "../../assets/foundetion.png";
import bookstack from "../../assets/bookstack.png";
import Note from "../../components/note/Note";
import { useNavigate } from "react-router-dom";

const Foundation = () => {
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
            backgroundImage: `url(${foundetion})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2 className={css.courseName}>Foundation Course </h2>
          <p className={css.classes}>Class: 8th- 10th grade</p>
        </div>
        <div className={css.top_btn}>
          <button className={css.btn} onClick={onclickHandler}>
            APPLY FOR COURSE
          </button>
        </div>
      </div>
      <div className={css.middle}>
        <img src={bookstack} alt="" className={css.img} />
        <p className={css.text}>
          The Foundation Course for classes 8th, 9th and 10th is focused on
          building strong Foundation of students with clear Conceptual
          Understanding in various topics in order to enhance their overall
          basics and prepare them for the upcoming Competitive environment.
          <br />
          <br />
          This course is designed with a depth of understanding in foundational
          topics of Maths and Science with critical analysis of these topics and
          practice of these topics in a highly competitive manner. As opposed to
          conventional methods of many institutes where students are given touch
          of thousands of topics which students tend to forget , this course is
          designed to include limited advance topics of foundational importance
          but with a high depth of understanding and practice which will enhance
          a student's capability to learn in a highly competitive environment.
          <br />
          <br />
          This course shall cover Mathematics and Science upto Olympiad level
          where a student will be enabled to compete at National and
          International stage.
          <br />
          <br />
          Limited seats only. Admission for these classes shall be through our
          Admission Entrance Test (AET).
          <br />
          <br />
          Students are advised to make a confirmatory call to the Institute
          after Registration for the AET.
        </p>
      </div>
      <Note />
      <Footer />
    </>
  );
};

export default Foundation;
