import React from "react";
import css from "./Maths.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import mathspro from "../../assets/mathspro.png";
import kid from "../../assets/kid.png";
import Note from "../../components/note/Note";
import { useNavigate } from "react-router-dom";

const Maths = () => {
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
            backgroundImage: `url(${mathspro})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2 className={css.courseName}>Maths+ Programme </h2>
          <p className={css.classes}>Class: 6th- 11th grade</p>
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
          Our Maths+ Programme is a special initiative for the Junior
          Mathematicians among us who are highly enthusiastic about Maths and
          want to have an enhanced understanding and practice of Maths subject
          at a level which will be distinct from others. This programme shall be
          a proper structure of high level practice of advance concepts and
          topics and development of calculative capabilities of the future Math
          Geniuses.
          <br />
          This course shall compulsorily include competing in National and
          International Mathematics Olympiads and Competitions and even at the
          Institute the student will be trained rigorously in similar
          environment.
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

export default Maths;
