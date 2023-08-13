import React from "react";
import css from "./Classes.module.css";
import icon from "../../assets/icon.png";

const Classes = () => {
  return (
    <div className={css.classes}>
      <h3 className={css.heading}>Join Our Classes</h3>
      <div className={css.cards}>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}> Free Crash Course by 6+ IITians </span>
            Starting From
            <span className={css.color_text}> December 2023 </span>
          </p>
          <button className={css.btn}>Register Now</button>
        </div>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}> “Tea With 14+ IITians” </span>
            Free Orientation Programme On 21st January 2024.
          </p>
          <button className={css.btn}>Join Us</button>
        </div>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}>Admissions Opening Soon </span>
            for all Batches of 2024
            <span className={css.color_text}> Classes 6-11 </span>
          </p>
          <button className={css.btn}>Enquire</button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
