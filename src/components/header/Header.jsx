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

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
    <div className={css.header}>
      <div className={css.header_top}>
        <span className={css.top_link}>+91-8854228785</span>
        <span className={css.top_link}>abhyaasiit1234@gmail.com</span>
        <span className={css.top_link}>Online admission form</span>
        <span className={css.top_link}>online student counselling</span>
      </div>
      <div
        className={
          isSticky ? `${css.header_bottom} ${css.sticky}` : css.header_bottom
        }
        id="header_bottom">
        <div className={css.left}>
          <img src={logo} alt="logo_img" className={css.logo} />
        </div>
        <div className={css.center}>
          <p className={css.para}>HOME</p>
          <p className={css.para}>ABOUT US</p>
          <p className={css.para}>COURSES</p>
          <p className={css.para}>FACULTY</p>
          <p className={css.para}>ADMISSIONS</p>
          <p className={css.para}>FACILITIES</p>
        </div>
        <div className={css.right}>
          <button className={css.btn}>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
