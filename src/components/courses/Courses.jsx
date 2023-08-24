import css from "./Courses.module.css";

import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import course5 from "../../assets/course5.png";
import btn from "../../assets/btn.png";

const Courses = () => {
  let box = document.getElementById("course_carousel");

  console.log(box);

  const prevBtnClicked = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };
  const nextBtnClicked = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className={css.courses}>
      <h3 className={css.heading}>Courses</h3>

      <button className={css.prev_btn}>
        <img
          src={btn}
          alt=""
          className={css.btn_img}
          onClick={prevBtnClicked}
        />
      </button>
      <button className={css.next_btn}>
        <img
          src={btn}
          alt=""
          className={css.btn_img}
          onClick={nextBtnClicked}
        />
      </button>
      <div className={css.course_carousel} id="course_carousel">
        <img src={course1} alt="" className={css.carousel_img} />
        <img src={course2} alt="" className={css.carousel_img} />
        <img src={course3} alt="" className={css.carousel_img} />
        <img src={course4} alt="" className={css.carousel_img} />
        <img src={course5} alt="" className={css.carousel_img} />
      </div>
    </div>
  );
};

export default Courses;
