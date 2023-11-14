import React, { useEffect } from "react";
import css from "./PrivecyPolicy.module.css";

const PrivecyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.PrivecyPolicy}>
      <h2 className={css.heading}>Our Privacy Policies</h2>
      <div className={css.group}>
        <p className={css.main_Headings}>1. Introduction</p>
        <p className={css.sub_Headings}>1.1 Mission and Vision</p>
        <p className={css.desc}>
          Mission: To empower students for academic excellence in engineering
          education, fostering innovation and holistic development.
        </p>
        <p className={css.desc}>
          Vision: To be a leading coaching institute in India, recognized for
          its outstanding teaching methodologies and success in IIT entrance
          examinations.
        </p>
        <p className={css.sub_Headings}>
          1.2 Overview of Abhyaas IIT Educational Group
        </p>
        <p className={css.desc}>
          Founded in [Year], Abhyaas IIT Educational Group has established
          itself as a premier institute for IIT-JEE coaching, with a focus on
          personalized learning and mentorship.
        </p>
        <p className={css.sub_Headings}>1.3 Purpose of Policies Manual</p>
        <p className={css.desc}>
          This manual serves as a comprehensive guide to the policies and
          procedures governing the functioning of Abhyaas IIT Educational Group.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>2. Admission Policies</p>
        <p className={css.sub_Headings}>2.1 Eligibility Criteria</p>
        <p className={css.desc}>
          Students must have completed 10th standard from a recognized board
          with a minimum of 60% marks. Entrance test conducted by the institute
          to assess the student's aptitude for IIT-JEE preparation.
        </p>
        <p className={css.sub_Headings}>2.2 Admission Process</p>
        <p className={css.desc}>
          Submission of application form along with necessary academic
          records.Entrance test followed by a personal interview.
        </p>
        <p className={css.sub_Headings}>2.3 Reservation Policy</p>
        <p className={css.desc}>
          In line with government regulations, a certain percentage of seats are
          reserved for SC/ST/OBC and physically challenged candidates.
        </p>
        <p className={css.sub_Headings}>2.4 Fee Structure</p>
        <p className={css.desc}>
          Detailed fee structure for different courses, with provisions for
          scholarships for meritorious and economically disadvantaged students.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>3. Academic Policies</p>
        <p className={css.sub_Headings}>
          3.1 Curriculum Design and Development
        </p>
        <p className={css.desc}>
          The curriculum is regularly updated to align with the latest IIT-JEE
          syllabus and trends. Includes a blend of classroom teaching, practical
          workshops, and mock tests.
        </p>
        <p className={css.sub_Headings}>3.2 Class Scheduling</p>
        <p className={css.desc}>
          Regular classes, weekend batches, and special doubt-clearing sessions
          scheduled throughout the academic year.
        </p>
        <p className={css.sub_Headings}>3.3 Examination and Evaluationy</p>
        <p className={css.desc}>
          Regular internal assessments and term exams to track student progress.
          Feedback mechanism for students to improve their performance.
        </p>
        <p className={css.sub_Headings}>3.4 Grading System</p>
        <p className={css.desc}>
          Grading based on performance in internal assessments, term exams, and
          mock tests.
        </p>
        <p className={css.sub_Headings}>
          3.5 Academic Integrity and Code of Conduct
        </p>
        <p className={css.desc}>
          Zero-tolerance policy towards cheating and plagiarism.Emphasis on
          honesty and integrity in academic pursuits.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>4. Faculty and Staff Policies</p>
        <p className={css.sub_Headings}>4.1 Recruitment and Selection</p>
        <p className={css.desc}>
          Faculty selection through a rigorous process, including subject tests
          and teaching demonstrations.
        </p>
        <p className={css.sub_Headings}>4.2 Professional Development</p>
        <p className={css.desc}>
          Regular training sessions for faculty to stay updated with the latest
          educational trends and methodologies.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>5. Student Support Services</p>
        <p className={css.sub_Headings}>5.1 Counseling Services</p>
        <p className={css.desc}>
          Dedicated counselors to provide academic and emotional support to
          students.
        </p>
        <p className={css.sub_Headings}>5.2 Health and Wellness</p>
        <p className={css.desc}>
          Regular health check-ups and wellness programs to ensure the physical
          and mental well-being of students.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>6. Campus Facilities and Security</p>
        <p className={css.sub_Headings}>6.1 Infrastructure and Maintenance</p>
        <p className={css.desc}>
          Well-equipped classrooms, laboratories, and a library with the latest
          resources and technology. Regular maintenance and updates to
          infrastructure to provide a conducive learning environment.
        </p>
        <p className={css.sub_Headings}>6.2 Safety and Security Measures</p>
        <p className={css.desc}>
          24/7 security personnel on campus. Installation of CCTV cameras and
          strict entry-exit protocols to ensure student safety.
        </p>
        <p className={css.sub_Headings}>6.3 Emergency Procedures</p>
        <p className={css.desc}>
          Emergency response team and protocols in place for handling situations
          like fire, medical emergencies, or natural disasters.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>7. Code of Conduct</p>
        <p className={css.sub_Headings}>7.1 General Conduct</p>
        <p className={css.desc}>
          Expectation of respect, integrity, and professionalism from all
          members of the institute. Strict prohibition of any form of violence,
          bullying, or misbehavior.
        </p>
        <p className={css.sub_Headings}>
          7.2 Anti-Discrimination and Harassment
        </p>
        <p className={css.desc}>
          Zero tolerance towards any form of discrimination or harassment, be it
          racial, sexual, or based on disability.
        </p>
        <p className={css.sub_Headings}>7.3 Disciplinary Procedures</p>
        <p className={css.desc}>
          Clear procedures for handling violations of the code of conduct,
          including warnings, suspension, or expulsion based on the severity of
          the offense.
        </p>
        <p className={css.sub_Headings}>7.4 Drug and Alcohol Policy</p>
        <p className={css.desc}>
          Strict ban on the possession, use, or distribution of drugs and
          alcohol on campus.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>8. Communication Policies</p>
        <p className={css.sub_Headings}>8.1 Internal Communication</p>
        <p className={css.desc}>
          Regular meetings, emails, and an internal portal for effective
          communication among staff and students.
        </p>
        <p className={css.sub_Headings}>8.2 External Communication</p>
        <p className={css.desc}>
          Guidelines for communication with external parties, including media,
          parents, and public relations.
        </p>
        <p className={css.sub_Headings}>8.3 Social Media Guidelines</p>
        <p className={css.desc}>
          Policies for the responsible use of social media by students and
          staff, representing the institute's ethos and values.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>9. Financial Policies</p>
        <p className={css.sub_Headings}>9.1 Tuition and Fee Payment</p>
        <p className={css.desc}>
          Detailed information on fee payment schedules, modes of payment, and
          late payment penalties.
        </p>
        <p className={css.sub_Headings}>9.2 Refund Policy</p>
        <p className={css.desc}>
          Conditions under which fees may be refunded, including withdrawal from
          courses or discontinuation.
        </p>
        <p className={css.sub_Headings}>9.3 Scholarships and Financial Aid</p>
        <p className={css.desc}>
          Criteria for scholarship eligibility and application process for
          financial aid for economically disadvantaged students.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>10. Community Engagement</p>
        <p className={css.sub_Headings}>10.1 Outreach Programs</p>
        <p className={css.desc}>
          Initiatives for community development and student involvement in
          societal welfare activities.
        </p>
        <p className={css.sub_Headings}>10.2 Collaboration with Industry</p>
        <p className={css.desc}>
          Partnerships with industry leaders for internships, workshops, and
          guest lectures.
        </p>
        <p className={css.sub_Headings}>10.3 Alumni Relations</p>
        <p className={css.desc}>
          Strong alumni network for mentoring, career guidance, and fostering
          long-term relationships.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>11. Compliance and Legal</p>
        <p className={css.sub_Headings}>11.1 Regulatory Compliance</p>
        <p className={css.desc}>
          Adherence to all educational regulations and standards set by
          governing bodies.
        </p>
        <p className={css.sub_Headings}>11.2 Intellectual Property</p>
        <p className={css.desc}>
          Policies regarding the ownership and use of intellectual property
          created by staff and students.
        </p>
        <p className={css.sub_Headings}>11.3 Data Protection and Privacy</p>
        <p className={css.desc}>
          Strict measures to protect personal data of students and staff, in
          compliance with privacy laws.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>12. Review and Revision</p>
        <p className={css.sub_Headings}>12.1 Policy Review Process</p>
        <p className={css.desc}>
          Regular review and updating of policies to ensure they remain relevant
          and effective.
        </p>
        <p className={css.sub_Headings}>12.2 Revision History</p>
        <p className={css.desc}>
          Documentation of all changes and updates made to the policies over
          time. Appendix: Forms and Templates
        </p>
      </div>
      <p className={css.textra_text}>
        Detailed forms and templates for various administrative processes.
        Disclaimer: These policies are subject to modification and may be
        updated to adapt to changing educational standards and regulations.
      </p>
      <p className={css.textra_text}>
        This comprehensive policy manual should serve as a foundational document
        for the Abhyaas IIT Educational Group of Institutes, guiding its
        operations and ensuring a high standard of education and service.
      </p>
    </div>
  );
};

export default PrivecyPolicy;
