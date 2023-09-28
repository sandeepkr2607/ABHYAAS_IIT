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

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const goToHome = () => {
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
    <>
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
            <Link
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}>
              <img
                src={logo}
                alt="logo_img"
                onClick={goToHome}
                className={css.logo}
              />
            </Link>
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
      <div className={css.mbl_header}>
        <div className={css.mbl_logo}>
          <img
            src={logo}
            alt="Logo"
            onClick={goToHome}
            className={css.mbl_logo_img}
          />
        </div>
        <div
          className={
            click ? `${css.mbl_menu} ${css.open}` : css.mbl_menu_hidden
          }>
          <Link
            to="/"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            <p className={css.mbl_para}>HOME</p>
          </Link>

          <Link
            to="about-us"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}>
            <p className={css.mbl_para}>ABOUT US</p>
          </Link>
          <Link
            to="courses"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            <p className={css.mbl_para}>COURSES</p>
          </Link>
          <Link
            to="teams"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            <p className={css.mbl_para}>FACULTY</p>
          </Link>
          <Link
            to="admissions"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}>
            <p className={css.mbl_para}>ADMISSIONS</p>
          </Link>
          <Link
            to="facilities"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            <p className={css.mbl_para}>FACILITIES</p>
          </Link>

          <div className={css.mbl_Links}>
            <h4 className={css.contact_title}>Feel free to...</h4>

            <div className={css.link_imgs}>
              <a
                href="tel:+91 6005787874"
                style={{ textDecoration: "none" }}
                className={css.mbl_contact_link}>
                <BiPhoneCall size={22} color="rgba(255, 145, 76, 1)" />
              </a>
              <a
                href="mailto:info@abhyaasiit.com"
                style={{ textDecoration: "none" }}
                className={css.mbl_contact_link}>
                <FiMail size={22} color="rgba(255, 145, 76, 1)" />
              </a>
              <a
                href="https://wa.me/916005787874?text=Hello,%20I%20want%20to%20chat!"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                className={css.mbl_contact_link}>
                <FaWhatsapp size={22} color="rgba(255, 145, 76, 1)" />
              </a>
            </div>
          </div>
        </div>
        <div className={css.hamburger} onClick={handleClick}>
          <i className={click ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"} />
        </div>
      </div>
    </>
  );
};

export default Header;
