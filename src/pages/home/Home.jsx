import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Classes from "../../components/classes/Classes";
import AboutUs from "../../components/aboutUs/AboutUs";
// import Courses from "../../components/courses/Courses";
import Hero from "../../components/hero/Hero";
import Admission from "../../components/admission/Admission";
import Facilities from "../../components/facilities/Facilities";
import Teams from "../../components/teams/Teams";
// import Carousel from "../../components/swiper/Carousel";
import CoursesFees from "../../components/courses&fees/CoursesFees";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <AboutUs />
      {/* <Courses /> */}
      {/* <Carousel /> */}
      <CoursesFees />
      <Admission />
      <Facilities />
      <Teams />
      <Footer />
    </>
  );
};

export default Home;
