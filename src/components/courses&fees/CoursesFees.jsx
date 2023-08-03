// import React from "react";
// import "./CoursesFees.css";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import course1 from "../../assets/course1.png";
// import course2 from "../../assets/course2.png";
// import course3 from "../../assets/course3.png";
// import course4 from "../../assets/course4.png";
// import course5 from "../../assets/course5.png";
// import btn from "../../assets/btn.png";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}>
//       NEXT
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}>
//       PREV
//     </div>
//   );
// }

// const CoursesFees = () => {
//   const slider = React.useRef(null);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <div className="courses_fees" id="courses">
//       <h3 className="heading_top">Courses & Fees Structure</h3>
//       <button className="prev_btn" onClick={() => slider?.current?.slickPrev()}>
//         <img src={btn} alt="" className="prev_img" />
//       </button>
//       <button className="next_btn" onClick={() => slider?.current?.slickNext()}>
//         <img src={btn} alt="" className="next_img" />
//       </button>
//       <Slider ref={slider} {...settings}>
//         <div>
//           <img src={course1} alt="course_img" className="course_img" />
//         </div>
//         <div>
//           <img src={course2} alt="course_img" className="course_img" />
//         </div>
//         <div>
//           <img src={course3} alt="course_img" className="course_img" />
//         </div>
//         <div>
//           <img src={course4} alt="course_img" className="course_img" />
//         </div>
//         <div>
//           <img src={course5} alt="course_img" className="course_img" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default CoursesFees;
