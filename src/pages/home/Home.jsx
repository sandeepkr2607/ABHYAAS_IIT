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
import CoursesFees from "../../components/courses&fees/CoursesFees";
import Carousel from "../../components/carousel/Carousel";
import Slick from "../../components/slick/Slick";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <AboutUs />
      {/* <Courses />
      <CoursesFees /> */}
      <Slick />
      <Admission />
      <Facilities />
      <Teams />
      <Footer />
      {/* <Carousel /> */}
    </>
  );
};

export default Home;
