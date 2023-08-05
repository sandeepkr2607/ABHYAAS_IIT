import React from "react";
import css from "./About.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroAbout from "../../components/hero_About/HeroAbout";
import knowledge_tree from "../../assets/knowledge_tree.png";
import books from "../../assets/books.png";

const About = () => {
  return (
    <>
      <Header />
      <HeroAbout />
      <div className={css.content}>
        <div className={css.content_card}>
          <img src={books} alt="" className={css.image} />
          <div className={css.card_details}>
            <h4 className={css.card_title}>Expert leadership</h4>
            <p className={css.card_para}>
              AbhyaasIIT is fortunate to be led by three exceptional leaders,
              all of whom are highly accomplished IITians. Sunit Kumar, who
              secured an impressive AIR 33 in UPSC CAPF examination, brings a
              wealth of knowledge and expertise to the team. His ability to
              excel in a highly competitive field demonstrates his exceptional
              leadership skills. Prachin Kumar Chahar who pioneered the coveted
              GATE exam , complement the team with his extensive experience. His
              additional achievement of a Master’s Degree in Power Electronics
              from the prestigious IISC Bangalore further enhances the
              institute’s credibility. Chetan Swaroop who have had the potential
              to work at the prestigious PSU Coal India Limited adds core
              competence and unique perspective to the team. With their immense
              experience, the trio provides a dynamic and stimulating
              environment for students, inspiring them to reach new heights and
              achieve their goals in the competitive world of engineering and
              medical entrance exams.
            </p>
          </div>
        </div>
        <div className={css.content_card}>
          <div className={css.card_details}>
            <h4 className={css.card_title}>Rigorous training Programme</h4>
            <p className={css.card_para}>
              The coaching institute’s training programme provides in-depth
              coverage of the syllabus for JEE Mains, JEE Advance and NEET
              exams, ensuring comprehensive subject knowledge. Additionally,
              special attention is given to preparing students for board exams,
              NTSE and Olympiads. The syllabus is divided into topics, which are
              thoroughly explained through interactive lectures, rigorous tests
              and review strategy. Regular assessment are conducted by IITian
              Mentors to track progress and identify areas for improvement. The
              programmes also includes guidance and resources for board exam
              preparation, enabling students to excel in both competitive
              entrance exams and their school curriculum. We prioritize to give
              utmost focus and attention to every student ensuring that even the
              students who are at weaker level are brought up to their maximum
              Potential throughout the course.
            </p>
          </div>
          <img src={knowledge_tree} alt="" className={css.image} />
        </div>
        <div className={css.content_card}>
          <img src={books} alt="" className={css.image} />
          <div className={css.card_details}>
            <h4 className={css.card_title}>
              Comprehensive, Updated and Well designed Study Materials
            </h4>
            <p className={css.card_para}>
              “ThinkIIT” and “ThinkNEET” modules represent the coaching
              institute’s commitment to providing high-level, updated, and
              comprehensive study materials. These modules are designed with
              meticulous attention to detail, ensuring that students receive the
              most relevant and comprehensive content to excel in their
              respective exams. The materials are regularly updated to align
              with the latest syllabus and examination patterns. All our content
              is complemented by Test Series and Daily Practice Papers (DPPs).
            </p>
          </div>
        </div>
        <div className={css.content_card}>
          <div className={css.card_details}>
            <h4 className={css.card_title}>
              Transformational mentors Transforming young minds
            </h4>
            <p className={css.card_para}>
              Our Coaching institute takes pride in providing a unique and
              invaluable support system to our students through Personal IITian
              Mentors. Each student is assigned a dedicated mentor who is an
              IITian themselves(?), ensuring personalised guidance and
              mentorship throughout the learning journey. The presence of
              Personal IITian Mentors creates a nurturing environment where
              students can receive tailored advice, build confidence, and
              receive expert guidance, leading to enhanced performance and
              success in their academic pursuits.
            </p>
          </div>
          <img src={knowledge_tree} alt="" className={css.image} />
        </div>
        <div className={css.content_card}>
          <img src={books} alt="" className={css.image} />
          <div className={css.card_details}>
            <h4 className={css.card_title}>
              Regular Assessment of Performance
            </h4>
            <p className={css.card_para}>
              The IITian Mentors at our coaching institute prioritize the
              regular assessment of each student’s performance. They conduct
              thorough evaluations and hold regular meetings with parents to
              discuss the student’s progress and areas for improvement. These
              assessments provide valuable insights into the student’s
              strengths, weaknesses and learning style. Furthermore, the
              Mentor-parent meetings go beyond discussing academic performance.
              The mentors also engage in constructive conversations about the
              home environment and how it can be optimised to support the
              student’s overall development. By working closely with parents,
              the mentors provide tailored recommendations and suggestions that
              can enhance the student’s capability, including study habits and
              time management techniques and thus the students will receive a
              holistic support both inside and outside the institute.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
