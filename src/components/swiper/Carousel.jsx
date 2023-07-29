// import css from "./Carousel.module.css";
// import SwiperBtns from "../swiperBtns/SwiperBtns";

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import course1 from "../../assets/course1.png";
// import course2 from "../../assets/course2.png";
// import course3 from "../../assets/course3.png";
// import course4 from "../../assets/course4.png";
// import course5 from "../../assets/course5.png";
// import btn from "../../assets/btn.png";

// const Carousel = () => {
//   return (
//     <div className={css.carousel}>
//       <h3 className={css.heading}>Courses & Fees Structure</h3>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={3}
//         // navigation
//         // pagination={{ clickable: true }}
//         // scrollbar={{ draggable: true }}
//         // onSwiper={(swiper) => console.log(swiper)}
//         // onSlideChange={() => console.log("slide change")}
//       >
//         <SwiperSlide className={css.swiperSlide}>
//           <img src={course1} alt="" className={css.carousel_img} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={course2} alt="" className={css.carousel_img} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={course3} alt="" className={css.carousel_img} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={course4} alt="" className={css.carousel_img} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={course5} alt="" className={css.carousel_img} />
//         </SwiperSlide>

//         <SwiperBtns />
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;
