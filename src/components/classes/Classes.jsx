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
            <span className={css.color_text}> Batch 1 </span>
            To Be Stared From
            <span className={css.color_text}> April 2024 </span>
            For Various Courses.
          </p>
        </div>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}> “Tea With IITians” </span>
            Orientation Programme On 2 1st January 2024.
          </p>
          <button className={css.btn}>Join Us</button>
        </div>
        <div className={css.card}>
          <img src={icon} alt="icon" className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}>Entrance Test </span>
            For Admissions For JEE/NEET Foundation Courses
            <span className={css.color_text}> 28th January. </span>
          </p>
          <button className={css.btn}>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
