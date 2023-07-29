import React from "react";
import css from "./Footer.module.css";
import yt from "../../assets/yt.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import linkdin from "../../assets/linkdin.png";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.top}>
        <div className={css.left}>
          <p className={css.Follow_us}>Follow us:</p>
          <div className={css.follow_links}>
            <a
              className={css.img_link}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/NixonBit_India">
              <img src={yt} alt="" className={css.link} />
            </a>
            <a
              className={css.img_link}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/NixonBit_India">
              <img src={fb} alt="" className={css.link} />
            </a>
            <a
              className={css.img_link}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/NixonBit_India">
              <img src={twitter} alt="" className={css.link} />
            </a>
            <a
              className={css.img_link}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/NixonBit_India">
              <img src={linkdin} alt="" className={css.link} />
            </a>
          </div>
          <div className={css.line}></div>
          <p className={css.newsletter}>Newsletter</p>
          <p className={css.left_para}>
            Get Officevibe content straight to your inbox.
          </p>
          <p className={css.email}>Email address*</p>
          <input
            type="email"
            className={css.input}
            placeholder="Enter Your Email Address"
          />
          <button className={css.left_btn}>Subscribe</button>
        </div>
        <div className={css.right}>
          <div className={css.section}>
            <h4 className={css.title}>ABOUT US</h4>
            <p className={css.link}>About Abhyaasiit</p>
            <p className={css.link}>Apply for Faculty Position</p>
            <p className={css.link}>Jobs at abhyaasiit</p>
            <p className={css.link}>Abhyaasiit SCHOOLS</p>
            <p className={css.link}>Photo Gallery</p>
            <p className={css.link}>Video Gallery</p>
          </div>
          <div className={css.section}>
            <h4 className={css.title}>COACHING</h4>
            <p className={css.link}>JEE & NEET</p>
            <p className={css.link}>Foundation Course</p>
            <p className={css.link}>Boards Special</p>
            <p className={css.link}>Brain Gym</p>
          </div>
          <div className={css.section}>
            <h4 className={css.title}>STUDENT's TALK</h4>
            <p className={css.link}>abhyaasiit Toppers</p>
            <p className={css.link}>Testimonials</p>
            <p className={css.link}>Alumni</p>
          </div>
          <div className={css.section}>
            <h4 className={css.title}>RESOURCES</h4>
            <p className={css.link}>JEE & NEET 2023 Exam Pattern</p>
            <p className={css.link}>JEE & NEET Top Scorers</p>
            <p className={css.link}>GATE 2023 Exam Pattern</p>
          </div>
          <div className={css.section}>
            <h4 className={css.title}>ENQUIRY</h4>
            <p className={css.link}>Blog</p>
            <p className={css.link}>FAQs</p>
            <p className={css.link}>Feedback</p>
            <p className={css.link}>Contact Us</p>
          </div>
        </div>
      </div>
      <div className={css.bottom}>
        <p className={css.bottom_para}>Privacy Policy</p>
        <p className={css.bottom_para}>GDPR</p>
        <p className={css.bottom_para}>GDPR</p>
        <p className={css.bottom_para}>Data Processing Addendum</p>
        <p className={css.bottom_para}>Security</p>
        <p className={css.bottom_para}>Data Processing Record</p>
      </div>
    </div>
  );
};

export default Footer;
