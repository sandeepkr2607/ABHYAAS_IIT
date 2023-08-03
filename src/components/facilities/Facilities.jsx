import React from "react";
import css from "./Facilities.module.css";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import btn_img from "../../assets/btn_img.png";

const Facilities = () => {
  return (
    <div className={css.facilities} id="facilities">
      <h3 className={css.heading}>Coaching Facilities</h3>
      <p className={css.para}>
        {/* Our State-Of-The-Art Facilities, Including Classrooms, The Library, And
        The Computer Lab , Are Designed To Provide Students With A Comfortable
        And Conducive Environment For Learning. Our Classrooms Are Equipped With
        Projectors And Audio Systems, Making Learning More Engaging And
        Interactive. Our Library Houses A Vast Collection Of Study Materials,
        Including Textbooks, Reference Books, And Journals, To Help Students In
        Their Academic Pursuits. Our Computer Lab Is Equipped With The Latest
        Technology, Providing Students With Access To Online Resources And Tools
        To Aid Their Learning. */}
      </p>
      <div className={css.img_gallery}>
        <div className={css.left}>
          <img src={gallery1} alt="" className={css.gallery1} />
          <img src={gallery2} alt="" className={css.gallery2} />
        </div>
        <div className={css.center}>
          <img src={gallery3} alt="" className={css.vallery3} />
        </div>
        <div className={css.right}>
          <img src={gallery4} alt="" className={css.gallery4} />
          <div className={css.bottom}>
            <img src={gallery5} alt="" className={css.gallery5} />
            <button className={css.btn_div}>
              <h3 className={css.btn_heading}>CONTACT US</h3>
              <p className={css.btn_para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
              <img src={btn_img} alt="" className={css.btn_img} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
