import React, { useRef } from "react";
import "./Slick.css";

import Slider from "react-slick";

import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import course5 from "../../assets/course5.png";
import btn from "../../assets/btn.png";

const Slick = () => {
  const arrowRef = useRef(null);

  var settings = {
    // className: "center",
    // centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="container" id="courses">
      <div className="inner_container">
        <h2 className="heading">Courses & Fees Structure</h2>
        <div className="slide">
          <Slider ref={arrowRef} {...settings}>
            <div className="image_box">
              <img src={course1} alt="" className="image" />
              <div className="disc">
                <h2 className="course_title">Brain Gym</h2>
                <p className="course_class">Class 6-7</p>
                <button className="btn">Join Now</button>
              </div>
            </div>
            <div className="image_box">
              <img src={course2} alt="" className="image" />
              <div className="disc">
                <h2 className="course_title">Foundation Course</h2>
                <p className="course_class">Class 8, 9 & 10</p>
                <button className="btn">Join Now</button>
              </div>
            </div>
            <div className="image_box">
              <img src={course3} alt="" className="image" />
              <div className="disc">
                <h2 className="course_title">IIT/JEE Mains</h2>
                <p className="course_class">Class 11-12</p>
                <button className="btn">Join Now</button>
              </div>
            </div>
            <div className="image_box">
              <img src={course4} alt="" className="image" />
              <div className="disc">
                <h2 className="course_title">NEET UG</h2>
                <p className="course_class">Class 11-12</p>
                <button className="btn">Join Now</button>
              </div>
            </div>
            <div className="image_box">
              <img src={course5} alt="" className="image" />
              <div className="disc">
                <h2 className="course_title">Maths+ Programme</h2>
                <p className="course_class">Class 6-11</p>
                <button className="btn">Join Now</button>
              </div>
            </div>
          </Slider>
        </div>
        <button
          className="left_btn"
          onClick={() => arrowRef.current.slickPrev()}>
          <img src={btn} alt="" className="left_btn_img" />
        </button>
        <button
          className="right_btn"
          onClick={() => arrowRef.current.slickNext()}>
          <img src={btn} alt="" className="right_btn_img" />
        </button>
      </div>
    </div>
  );
};

export default Slick;
