import React from "react";
import css from "./Hero.module.css";
import hero_bg from "../../assets/hero_bg.png";
import hero_img from "../../assets/hero_img.png";
import hero_line from "../../assets/hero_line.png";

const Hero = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.heading}>
        Welcome To
        <span className={css.colored}>
          AbhyaasIIT <img src={hero_line} alt="Line" className={css.line} />
        </span>{" "}
      </h1>
      <p className={css.para}>
        AbhyaasIIT: An IITian only initiative IIT JEE and NEET exam prepration
        coaching center in Motihri. We nurture students from classes 6th to
        12th, empowering them to excel in education. Our 14+ IITian Mentors
        utilize engaging teaching methods for effective learning. Every Student
        will get a Personal IITian Mentor who will remain in constant touch with
        student and Parents.
      </p>
      <p className={css.para}>
        Personal IITian Mentor to every student at AbhyaasIIT. This is a
        one-of-a-kind initiative for future minds which will help them attain
        the path of excellence.
      </p>
      <img src={hero_img} alt="hero_img" className={css.hero_img} />
    </div>
  );
};

export default Hero;
