import React from "react";
import css from "./Teams.module.css";
import hod1 from "../../assets/hod1.png";
import hod2 from "../../assets/hod2.png";
import hod3 from "../../assets/hod3.png";
import men1 from "../../assets/men1.png";
import men2 from "../../assets/men2.png";
import men3 from "../../assets/men3.png";
import men4 from "../../assets/men4.png";
import men5 from "../../assets/men5.png";
import men6 from "../../assets/men6.png";
import men7 from "../../assets/men7.png";
import men8 from "../../assets/men8.png";
import men9 from "../../assets/men9.png";
import hod_link from "../../assets/hod_link.png";

const Teams = () => {
  return (
    <div className={css.team} id="teams">
      <div className={css.top}>
        <h5 className={css.heading1}>OUR TEAM</h5>
        <h2 className={css.heading2}>Our Valuable team members</h2>
        <h3 className={css.heading3}>Head of Department</h3>
        <div className={css.cards}>
          <div className={css.card}>
            <img src={hod1} alt="" className={css.card_img} />
            <div className={css.details}>
              <p className={css.post}>MATHS</p>
              <p className={css.name}>Prachin Chahar</p>
              <p className={css.quotes}>
                IIT BHU 2016 <br />
                IISC Bangalore 2020
                <br />5 years experience
              </p>
              <a
                className={css.img_links}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/prachin-chahar-a7058595">
                <img src={hod_link} alt="" className={css.link} />
              </a>
            </div>
          </div>
          <div className={css.card}>
            <img src={hod2} alt="" className={css.card_img} />
            <div className={css.details}>
              <p className={css.post}>PHYSICS</p>
              <p className={css.name}>Sunit Tiwari</p>
              <p className={css.quotes}>
                IIT BHU 2016 <br />
                AIR 33 UPSC CAPF 2019
                <br />2 years experience
              </p>
              <a
                className={css.img_links}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sunit-kumar-69254687">
                <img src={hod_link} alt="" className={css.link} />
              </a>
            </div>
          </div>
          <div className={css.card}>
            <img src={hod3} alt="" className={css.card_img} />
            <div className={css.details}>
              <p className={css.post}>CHEMISTRY</p>
              <p className={css.name}>Chetan Swaroop</p>
              <p className={css.quotes}>
                IIT BHU 2016 <br />
                former Asst. Manager CIL <br />6 Years experience
              </p>
              <a
                className={css.img_links}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/chetan-swaroop-784482116">
                <img src={hod_link} alt="" className={css.link} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={css.bottom}>
        <h3 className={css.bottom_heading}>Mentors</h3>
        <div className={css.bottom_cards}>
          <div className={css.bottom_card}>
            <img src={men1} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>MATHS</p>
              <p className={css.bottom_name}>Pradhyumn Singh</p>
              <p className={css.institute}>IIT BHU 2016, MS QCF Georgia Tech 2023</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men2} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>MATHS</p>
              <p className={css.bottom_name}>Ankur Satyapriye</p>
              <p className={css.institute}>NIT PATNA 2016</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men3} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>PHYSICS</p>
              <p className={css.bottom_name}>Shivam Mehta</p>
              <p className={css.institute}>IIT BHU 2016</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men4} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>MATHS</p>
              <p className={css.bottom_name}>Hirdesh Patel</p>
              <p className={css.institute}>IIT BHU 2016, ICAS Officer</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men5} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>PHYSICS</p>
              <p className={css.bottom_name}>Mayank Mishra</p>
              <p className={css.institute}>IPS Officer 2020 Batch</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men6} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>PHYSICS</p>
              <p className={css.bottom_name}>Ashwini Singh Tomar</p>
              <p className={css.institute}>IIT BHU 2016</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men7} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>CHEMISTRY</p>
              <p className={css.bottom_name}>Chandan Kumar Yadav</p>
              <p className={css.institute}>IIT BHU 2016</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men8} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>CHEMISTRY</p>
              <p className={css.bottom_name}>Sagar Singh</p>
              <p className={css.institute}>IIT BHU 2016</p>
            </div>
          </div>
          <div className={css.bottom_card}>
            <img src={men9} alt="" className={css.bottom_img} />
            <div className={css.bottom_details}>
              <p className={css.branch}>MATHS</p>
              <p className={css.bottom_name}>Alok Singhal</p>
              <p className={css.institute}>IIT BHU 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
