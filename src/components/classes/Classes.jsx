import React from 'react';
import css from './Classes.module.css';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.png';

const Classes = () => {
  const navigate = useNavigate();
  const Submithandler = () => {
    navigate('/form');
  };
  const SubmithandlerCrash = () => {
    navigate('/crash-course');
  };
  return (
    <div className={css.classes}>
      <h3 className={css.heading}>
        Join Our Classes For IIT JEE and NEET Exam Prepration
      </h3>
      <div className={css.cards}>
        <div className={css.card}>
          <img src={icon} alt='icon' className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}>
              Admission Entrance Test-2 (AET){' '}
            </span>
            on 30 march 2025
          </p>
          <button className={css.btn} onClick={SubmithandlerCrash}>
            Register Now
          </button>
        </div>
        <div className={css.card}>
          <img src={icon} alt='icon' className={css.card_img} />
          <p className={css.card_para}>
            <span className={css.color_text}> “Advance Batch-I” </span>
            For all classes through AET-1 from 16th march 2025.
          </p>
          <button className={css.btn} onClick={Submithandler}>
            Join Us
          </button>
        </div>
        <div className={css.card}>
          <img src={icon} alt='icon' className={css.card_img} />
          <p className={css.card_para}>
            Admissions Opening for all Classes for 2025-26 session.
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
