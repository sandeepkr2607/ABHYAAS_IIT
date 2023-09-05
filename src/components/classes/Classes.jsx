import React from "react";
import css from "./Classes.module.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const Classes = () => {
  const navigate = useNavigate();
  const Submithandler = () => {
    navigate("/form");
  };
  return (
    <div className={css.classes}>
      <h3 className={css.heading}>
        Join Our Classes For IIT JEE and NEET Exam Prepration
      </h3>
      <div className={css.cards}>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}> Free Crash Course </span>
            by 6+ IITians Starting From December 2023
          </p>
          <button className={css.btn} onClick={Submithandler}>
            Register Now
          </button>
        </div>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}> “Tea With 14+ IITians” </span>
            Free Orientation Programme On 21st January 2024.
          </p>
          <button className={css.btn} onClick={Submithandler}>
            Join Us
          </button>
        </div>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            Admissions Opening Soon for all Batches of 2024 Classes 6-11
          </p>
          <button className={css.btn} onClick={Submithandler}>
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
