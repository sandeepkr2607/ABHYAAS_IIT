import React from "react";
import css from "./AboutUs.module.css";
import about_img from "../../assets/about_img.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/about-us");
  };

  return (
    <div className={css.about_us} id="about-us">
      <div className={css.left}>
        <img src={about_img} alt="img " className={css.img} />
      </div>
      <div className={css.right}>
        <p className={css.para}>ABOUT US</p>
        <h3 className={css.heading}>
          AbhyaasIIT is a foundation for inspiring minds
        </h3>
        <p className={css.para_2}>
          AbhyaasIIT Motihari aims to bring quality coaching education to the Tier3
          city. we are a coaching institute with a team of 14+ IITian Mentors 
          which is committed to provide students with a strong foundation in core 
          concepts and problem-solving through our "ThinkIIT" modules.These 
          comprehensive modules for JEE and NEET Exams, which will be complemented 
          by AbhyaasIIT Test Series and Daily Practice Papers(DPPs). We intend
          to create quality career education, resources and individual attention
          and to nurture. It's a First-of-a-kind initiative to bring quality 
          education of IITians to Motihari.
        </p>
        <button className={css.btn} onClick={goToAboutUs}>
          See More about us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
