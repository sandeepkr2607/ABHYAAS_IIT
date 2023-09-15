import React, { useCallback, useEffect, useRef,useState } from "react";
import css from "./FormModal.module.css";
// import { MdClose } from "react-icons/md";
import model_img from "../../assets/model_img.png";
// import { color } from "framer-motion";
// import { FormErrorMessage } from "@chakra-ui/react";

const FormModal = ({ showModal, setShowModal, onClose }) => {
  const modalRef = useRef(null);
  const [input,setInput]=useState("");
  const [mobile_number,setMobile_number]=useState("");
  const [std,setStd]=useState("");
  const [message,setMessage]=useState("");
  const [errors, setErrors] = useState({
    input: '',
    mobile_number: '',
    std: '',
  });

  const inputChangeHandler=(event)=>{
      setInput(event.target.value)
      setErrors({
        ...errors,
        input:''
      })
  }
  const mobile_numberChangeHandler=(event)=>{
    const regex = /^[0-9]{10}$/;
    setMobile_number(event.target.value);
    if (regex.test(event.target.value) === false) {
      setErrors({
        ...errors,
        mobile_number:'Enter Valid Mobile Number'
      })
    }
    else{
      setErrors({
        ...errors,
        mobile_number:''
      })
    }
  }
  const stdChangeHandler=(event)=>{
      setStd(event.target.value)
      setErrors({
        ...errors,
        std:''
      })
  }
  const messageChangeHandler=(event)=>{
      setMessage(event.target.value)
  }



  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const onSubmitHandler=async (e)=>{
      e.preventDefault();
   
      const regex = /^[0-9]{10}$/;
      const newErrors = {};

      if (input.trim() === '') {
        newErrors.input= 'Name is required.';
       
      }
  
      if (regex.test(mobile_number) === false) {
        newErrors.mobile_number = 'Enter Valid Mobile Number';
      }
  
      if (std === '') {
        newErrors.std = 'Please enter a standerd';
      }

      setErrors(newErrors);
      // console.log(errors)


      if (Object.keys(newErrors).length === 0){

      const response = await fetch("https://dev.seiasecure.com/api/v1/abhyaas_enquiry_form", {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "name":input,"mobile_number":mobile_number, "std":std , "message":message })
      });
      const data=await response.json();
      console.log(data)
      setShowModal(false);
      }
  }




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
        <form className={css.form} onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Your name please!"
            className={  errors.input ? css.errorControl : css.name}
            onChange={inputChangeHandler}
          />
          {errors.input &&  <div className={css.errorMessage}>{errors.input}</div>}
         
          <input
            type="number"
            placeholder="Mobile No."
            className={ errors.mobile_number ? css.errorControl : css.name}
            onChange={mobile_numberChangeHandler}
          />
           {errors.mobile_number &&  <div className={css.errorMessage}>{errors.mobile_number}</div>}
        
          <select className={errors.std? css.errorSelectControl: css.select} onChange={stdChangeHandler}>
            <option disabled value=''>
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
        
          {errors.std &&  <div className={css.errorMessage}>{errors.std}</div>}
          <textarea
            placeholder="Feel free for any kind of query....."
            className={css.text_area}
            onChange={messageChangeHandler}
            ></textarea>
          <div className={css.btns}>
            <button
              className={css.btn_close}
              onClick={() => setShowModal(false)}>
              CLOSE
            </button>
            <button className={css.btn} type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
