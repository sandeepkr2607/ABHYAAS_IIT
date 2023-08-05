// import React, { useEffect } from "react";
// import css from "./Header.module.css";
// import logo from "../../assets/logo.png";

// const Header = () => {
//   // const header_bottom = document.querySelector("#header_bottom");

//   useEffect(() => {
//     const headerBottom = document.getElementById("header_bottom");
//     const sticky = headerBottom.offsetTop;

//     const handleScroll = () => {
//       if (window.scrollY > sticky) {
//         headerBottom.classList.add(css.sticky);
//       } else {
//         headerBottom.classList.remove(css.sticky);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // const sticky = header_bottom.offsetTop;

//   // // console.log(sticky);

//   // window.addEventListener("scroll", () => {
//   //   if (window.scrollY > sticky) {
//   //     header_bottom.classList.add("sticky");
//   //   } else {
//   //     header_bottom.classList.remove("sticky");
//   //   }
//   // });

//   return (
//     <div className={css.header}>
//       <div className={css.header_top}>
//         <span className={css.top_link}>+91-8854228785</span>
//         <span className={css.top_link}>abhyaasiit1234@gmail.com</span>
//         <span className={css.top_link}>Online admission form</span>
//         <span className={css.top_link}>online student counselling</span>
//       </div>
//       <div className={css.header_bottom} id="header_bottom">
//         <div className={css.left}>
//           <img src={logo} alt="logo_img" className={css.logo} />
//         </div>
//         <div className={css.center}>
//           <p className={css.para}>HOME</p>
//           <p className={css.para}>ABOUT US</p>
//           <p className={css.para}>COURSES</p>
//           <p className={css.para}>FACULTY</p>
//           <p className={css.para}>ADMISSIONS</p>
//           <p className={css.para}>FACILITIES</p>
//         </div>
//         <div className={css.right}>
//           <button className={css.btn}>CONTACT US</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  const goToAHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const headerBottom = document.getElementById("header_bottom");
    const headerBottomTop = headerBottom.offsetTop;

    const handleScroll = () => {
      const shouldStick = window.scrollY > headerBottomTop;
      setIsSticky(shouldStick);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={css.header} id="/">
      <div className={css.header_top}>
        <a
          href="tel:+91 6005787874"
          style={{ textDecoration: "none" }}
          className={css.top_links}>
          <BiPhoneCall color="rgba(255, 145, 76, 1)" />
          <span className={css.top_link}>+91-6005787874</span>
        </a>
        <a
          href="mailto:info@abhyaasiit.com"
          style={{ textDecoration: "none" }}
          className={css.top_links}>
          <FiMail color="rgba(255, 145, 76, 1)" />
          <span className={css.top_link}>info@abhyaasiit.com</span>
        </a>
        <a
          href="https://wa.me/916005787874?text=Hello,%20I%20want%20to%20chat!"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
          className={css.top_links}>
          <FaWhatsapp color="rgba(255, 145, 76, 1)" />
          <span className={css.top_link}>91-6005787874</span>
        </a>

        {/* <span className={css.top_link}>online student counselling</span> */}
      </div>
      <div
        className={
          isSticky ? `${css.header_bottom} ${css.sticky}` : css.header_bottom
        }
        id="header_bottom">
        <div className={css.left}>
          <img
            src={logo}
            alt="logo_img"
            onClick={goToAHome}
            className={css.logo}
          />
        </div>
        <div className={css.center}>
          <Link
            to="/"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            <p className={css.para}>HOME</p>
          </Link>

          <Link
            to="about-us"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}>
            <p className={css.para}>ABOUT US</p>
          </Link>
          <Link
            to="courses"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            <p className={css.para}>COURSES</p>
          </Link>
          <Link
            to="teams"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            <p className={css.para}>FACULTY</p>
          </Link>
          <Link
            to="admissions"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            <p className={css.para}>ADMISSIONS</p>
          </Link>
          <Link
            to="facilities"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            <p className={css.para}>FACILITIES</p>
          </Link>
        </div>
        <div className={css.right}>
          <Link
            to="footer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            <button className={css.btn}>CONTACT US</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
