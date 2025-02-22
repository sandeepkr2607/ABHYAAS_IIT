import React from 'react';
import css from './Admission.module.css';
import abh_form from '../../assets/abh_form.png';

import NEET from '../../assets/NEET.png';
import JEE from '../../assets/JEE.png';
import maths from '../../assets/maths.png';
import Boards from '../../assets/Boards.png';
import ICSE from '../../assets/ICSE.png';
import NDA from '../../assets/NDA.png';
import nstse from '../../assets/nstse.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const Submithandler = () => {
    navigate('/form');
  };
  return (
    <div className={css.admission} id='admissions'>
      <div className={css.top}>
        <div className={css.left}>
          <h2 className={css.heading}>How To Apply For Admission</h2>
          <p className={css.para}>
            To apply for admission, students can visit our website and fill out
            the online application form. We also offer Scholarship Programs for
            merit students, and details of these programs can be found on our
            website.
          </p>
          <button className={css.btn} onClick={Submithandler}>
            Apply For Admission
          </button>
        </div>
        <div className={css.right}>
          <img src={abh_form} alt='' className={css.admission_img} />
        </div>
      </div>
      <div className={css.bottom}>
        <img src={JEE} alt='' className={css.b_img} />
        <img src={maths} alt='' className={css.b_img} />
        <img src={nstse} alt='' className={css.b_img} />
        <img src={NEET} alt='' className={css.b_img} />
        <img src={Boards} alt='' className={css.b_img} />
        <img src={ICSE} alt='' className={css.b_img} />
        <img src={NDA} alt='' className={css.b_img} />
      </div>
    </div>
  );
};

export default Admission;
