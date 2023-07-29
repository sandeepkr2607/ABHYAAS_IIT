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
          AbhyaasIIT <img src={hero_line} alt="Line" />
        </span>{" "}
      </h1>
      <p className={css.para}>
        AbhyaasIIT: Your pathway to success in JEE ADVANCE or NEET exams. We
        nurture students from classes 6th to 12th, empowering them to excel in
        top institutes. Our highly qualified faculty utilizes engaging teaching
        methods for effective learning. With a disciplined environment and
        state-of-the-art facilities, we ensure a conducive atmosphere for
        growth. Personalized IITian mentors drive continuous progress for each
        student.
      </p>
      <img src={hero_img} alt="hero_img" className={css.hero_img} />
    </div>
  );
};

export default Hero;
