import React, { useCallback, useEffect, useRef } from "react";
import css from "./FormModal.module.css";
import { MdClose } from "react-icons/md";
import model_img from "../../assets/model_img.png";

const FormModal = ({ showModal, setShowModal, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Reset on component unmount
    };
  }, [showModal]);

  return (
    <div
      className={`${css.modal} ${showModal ? css.active : ""}`}
      onClick={handleClickOutside}>
      <div className={css.inner_modal} ref={modalRef}>
        <img src={model_img} alt="" className={css.model_img} />
        <h1 className={css.heading_one}>Your Preference Matters,</h1>
        <h2 className={css.heading_two}>Let's Get to Know You.</h2>
        <form className={css.form}>
          <input
            type="text"
            placeholder="Your name please!"
            className={css.name}
          />
          {/* <div className={css.class_and_number}> */}
          <input
            type="number"
            placeholder="Mobile No."
            className={css.mobile}
          />
          <select className={css.select}>
            <option disabled value="">
              Std... ?
            </option>
            <option className={css.option} value="option1">
              Std 6
            </option>
            <option className={css.option} value="option2">
              Std 7
            </option>
            <option className={css.option} value="option2">
              Std 8
            </option>
            <option className={css.option} value="option2">
              Std 9
            </option>
            <option className={css.option} value="option2">
              Std 10
            </option>
            <option className={css.option} value="option2">
              Std 11
            </option>
            <option className={css.option} value="option2">
              Std 12
            </option>
            <option className={css.option} value="option2">
              IIT
            </option>
            <option className={css.option} value="option2">
              NEET
            </option>
          </select>
          {/* </div> */}
          <textarea
            placeholder="Feel free for any kind of query....."
            className={css.text_area}></textarea>
          <div className={css.btns}>
            <button
              className={css.btn_close}
              onClick={() => setShowModal(false)}>
              CLOSE
            </button>
            <button className={css.btn} onClick={() => setShowModal(false)}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
