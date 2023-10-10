import React from "react";
import css from "./Note.module.css";

const Note = () => {
  return (
    <div className={css.note}>
      <span className={css.colored}>Note:-</span>
      Students who plan to join AbhyaasIIT Institute in the upcoming session are
      advised to join the Free Crash Course as it will help improve their
      performance in Admission Entrance Tests (AET) for the courses of 2024
      session.
    </div>
  );
};

export default Note;
