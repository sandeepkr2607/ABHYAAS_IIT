import React, { useState, useEffect } from "react";
import css from "./Home.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Classes from "../../components/classes/Classes";
import AboutUs from "../../components/aboutUs/AboutUs";
// import Courses from "../../components/courses/Courses";
import Hero from "../../components/hero/Hero";
import Admission from "../../components/admission/Admission";
import Facilities from "../../components/facilities/Facilities";
import Teams from "../../components/teams/Teams";
import CoursesFees from "../../components/courses&fees/CoursesFees";
import Carousel from "../../components/carousel/Carousel";
import Slick from "../../components/slick/Slick";
import FormModal from "../../components/formModal/FormModal";

const Home = () => {
  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const [showModal, setShowModal] = useState(false);

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
      )}
    </div>
  );
};

export default Home;
