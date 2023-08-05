import React from "react";
import css from "./HeroAbout.module.css";
import Hero_About from "../../assets/Hero_About.png";
import about_line from "../../assets/about_line.png";

const HeroAbout = () => {
  return (
    <>
      <div
        className={css.hero}
        style={{
          backgroundImage: `url(${Hero_About})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "650px",
        }}>
        <h1 className={css.heading}>ABOUT US</h1>
        <img src={about_line} alt="Line" className={css.about_line} />
        <p className={css.title_para}>
          <span className={css.color_text}>AbhyaasIIT</span> is a foundation for
          inspiring minds. We are a coaching institute dedicated to providing
          students with a{" "}
          <span className={css.color_text}>
            {" "}
            strong foundation in core concepts and problem-solving skills
          </span>
          , That's why we have designed
          <span className={css.color_text}>
            {" "}
            our rigorous training module to provide students with a strong{" "}
          </span>
          foundation.
        </p>
      </div>
      <div className={css.hero_bottom}>
        <h3 className={css.bottom_title}>Vision</h3>
        <p className={css.bottom_para}>
          Our Primary Focus is to bring Quality Education to Tier2 and Tier3
          Cities and help students in these remote areas to overcome the
          challenges of Top Tier exam preparation while staying close to their
          own home.
        </p>
      </div>
    </>
  );
};

export default HeroAbout;
