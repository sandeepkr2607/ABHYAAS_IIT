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
          AbhyaasIIT aims to bring quality coaching education to Tier2 and Tier3
          cities, we are a coaching institute which is committed to provide
          students with a strong foundation in core concepts and problem-solving
          through our "ThinkIIT" modules. Our dedicated Team of "IITian mentors"
          has created comprehensive content for JEE and NEET Exams, which will
          be complemented by AbhyaasIIT Test Series and Daily Practice
          Papers(DPPs). We intend to create quality career education, resources
          and individual attention and to nurture competent and responsible
          career future. With our structured and rigorous training module, we
          empower students to excel and achieve their dreams.
        </p>
        <button className={css.btn} onClick={goToAboutUs}>
          See More about us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
