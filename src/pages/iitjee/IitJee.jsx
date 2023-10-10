import React from "react";
import css from "./IitJee.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import iitjeepic from "../../assets/iitjeepic.png";
import kid from "../../assets/kid.png";
import Note from "../../components/note/Note";
import { useNavigate } from "react-router-dom";

const IitJee = () => {
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate("/form");
  };
  return (
    <>
      <Header />
      <div className={css.top}>
        <div
          className={css.bg}
          style={{
            backgroundImage: `url(${iitjeepic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2 className={css.courseName}>IIT/JEE Mains </h2>
          <p className={css.classes}>Class: 11th- 12th grade</p>
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
          This initiative shall cover intense preparation for JEE Advance and
          JEE Mains exams with state-of-the-art facilities and Modules designed
          specifically for the purpose.
          <br />
          The students will go through a highly intense competitive environment
          with Daily Practice Papers(DPPs) and weekly Output Tests(OTs).
          <br />
          Each student will be assigned to a personal IITian Mentor who will
          conduct bi-Monthly review of the student and conduct meeting with
          Parents every month in order to develop the environment of child In
          and Out of the Institute.
          <br />
          Limited seats only. Admission for these classes shall be through our
          Admission Entrance Test (AET).
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

export default IitJee;
