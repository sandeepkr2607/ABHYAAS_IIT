import React from 'react';
import css from './ReturnPolicy.module.css';
import refund1 from '../../assets/refund1.jpg';
import refund2 from '../../assets/refund2.jpg';
import Header from '../header/HeaderHome';
import Footer from '../footer/Footer';

const ReturnPolicy = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <h1 className={css.heading}>Our Return Policy</h1>
        <img src={refund1} alt='Return Policy 1' className={css.image} />
        <img src={refund2} alt='Return Policy 2' className={css.image} />
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
