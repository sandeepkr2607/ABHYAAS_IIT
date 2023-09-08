import React, { useState, useEffect } from "react";
import css from "./Home.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Classes from "../../components/classes/Classes";
import AboutUs from "../../components/aboutUs/AboutUs";
// import Courses from "../../components/courses/Courses";
import Hero from "../../components/hero/Hero";
import Admission from "../../components/admission/Admission";
import Teams from "../../components/teams/Teams";
import Slick from "../../components/slick/Slick";
import FormModal from "../../components/formModal/FormModal";
// import FormModel from "../../components/formModal/FormModel";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    setShowModal(true);
    setisOpen(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.home}>
      <Header />

      <Hero />
      <Classes />
      <AboutUs />
      {/* <Courses />
      <CoursesFees /> */}
      <Slick />
      <Admission />
      {/* <Facilities /> */}
      <Teams />
      <Footer />
      {/* <Carousel /> */}
      {showModal && (
        <FormModal
          setShowModal={setShowModal}
          showModal={showModal}
          onClose={closeModal}
        />
        // <FormModel isOpen={isOpen}></FormModel>
      )}
    </div>
  );
};

export default Home;
