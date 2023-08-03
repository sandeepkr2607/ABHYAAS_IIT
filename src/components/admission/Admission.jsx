import React from "react";
import css from "./Admission.module.css";
import admission_img from "../../assets/admission_img.png";
import admission_bg from "../../assets/admission_bg.png";
import NEET from "../../assets/NEET.png";
import JEE from "../../assets/JEE.png";
import maths from "../../assets/maths.png";
import Boards from "../../assets/Boards.png";
import ICSE from "../../assets/ICSE.png";
import NDA from "../../assets/NDA.png";
import nstse from "../../assets/nstse.png";

const Admission = () => {
  return (
    <div className={css.admission} id="admissions">
      <div className={css.top}>
        <div className={css.left}>
          <h2 className={css.heading}>How To Apply For Admission</h2>
          <p className={css.para}>
            To Apply For Admission, Students Can Visit Our Website And Fill Out
            The Online Application Form. We Also Offer Scholarship Programs For
            Meritorious Students, And Details Of These Programs Can Be Found On
            Our Website.
          </p>
          <button className={css.btn}>Apply For Admission</button>
        </div>
        <div className={css.right}>
          <img src={admission_img} alt="" className={css.admission_img} />
        </div>
      </div>
      <div className={css.bottom}>
        <img src={JEE} alt="" className={css.b_img} />
        <img src={maths} alt="" className={css.b_img} />
        <img src={nstse} alt="" className={css.b_img} />
        <img src={NEET} alt="" className={css.b_img} />
        <img src={Boards} alt="" className={css.b_img} />
        <img src={ICSE} alt="" className={css.b_img} />
        <img src={NDA} alt="" className={css.b_img} />
      </div>
    </div>
  );
};

export default Admission;
