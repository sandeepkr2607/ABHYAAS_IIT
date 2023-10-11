import React, { useEffect } from "react";
import css from "./CrashCoursh.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Note from "../../components/note/Note";
import Footer from "../../components/footer/Footer";
import crashbg from "../../assets/crashbg.png";
import crashimg from "../../assets/crashimg.png";

const CrashCoursh = () => {
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
            backgroundImage: `url(${crashbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2 className={css.courseName}>Free Crash Course </h2>
          <p className={css.classes}>Class: 8th,9th & 12th grade</p>
        </div>
        <div className={css.top_btn}>
          <button className={css.btn} onClick={onclickHandler}>
            APPLY FOR COURSE
          </button>
        </div>
      </div>
      <div className={css.middle}>
        <img src={crashimg} alt="" className={css.img} />
        <p className={css.text}>
          Our Maths+ Programme is a special initiative for the Junior
          Mathematicians among us who are highly enthusiastic about Maths and
          want to have an enhanced understanding and practice of Maths subject
          at a level which will be distinct from others. This programme shall be
          a proper structure of high level practice of advance concepts and
          topics and development of calculative capabilities of the future Math
          Geniuses.
          <br />
          <br />
          This course shall compulsorily include competing in National and
          International Mathematics Olympiads and Competitions and even at the
          Institute the student will be trained rigorously in similar
          environment.
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

export default CrashCoursh;
