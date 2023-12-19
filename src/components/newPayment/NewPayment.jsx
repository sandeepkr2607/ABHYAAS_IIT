import React from "react";
import { useFormik } from 'formik';
import { ValidationSchema } from './schema';
import "./NewPayment.css";

const NewPayment = () => {

  // for testing
  // {
  //   "userId": "63ca3eeff9987ba8ba37fde2",
  //     "number": "9546251777",
  //       "amount": 100
  // }

  const id = localStorage.getItem("id");
  const initialValues = {
    // "userId": `${id}`,
    "userId": "63ca3eeff9987ba8ba37fde2",
    number: '',
    amount: ''
  }

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: async () => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        }
        console.log(values)
        const response = await fetch(`https://dev.seiasecure.com/api/v1/initiate_payment`, options);
        const json = await response.json();
        console.log(json.url)
        if (json.success) {
          console.log('Payment received')

          //redirect to success page  
          redirectToExternalURL(json.url);
        } else {
          console.log('failed ')

        }
      } catch (error) {
        console.log(error);

      }

    }
  })

  const redirectToExternalURL = (url) => {
    window.location.href = url;
  };

  return (
    <div className="payment">
      <div className="left">
        <h3 className="heading_left">Payment Details</h3>
        <hr className="hori_line" />
        <div className="left_rest">
          <div className="details">
            <p className="deatils_heading">DETAILS</p>
            <hr className="hori_line" />
            <div className="details_list">
              <p className="para">Registration Charge</p>
              <p className="para">GST Charge 18%</p>
              <p className="para">Payment Gateway Charge</p>
            </div>
            <hr className="hori_line" />
            <p className="lower_heading">TOTAL</p>
          </div>
          <div className="verti_Line"></div>
          <div className="amount">
            <p className="deatils_heading">AMOUNT</p>
            <hr className="hori_line" />
            <div className="amount_list">
              <p className="para">₹ 500</p>
              <p className="para">₹ 91</p>
              <p className="para">₹ 14.77</p>
            </div>
            <hr className="hori_line" />
            <p className="lower_heading">₹ 605.77</p>
          </div>
        </div>
      </div>
      <div className="right">
        <h3 className="right_heading">Proceed To Pay</h3>
        <hr className="hori_line" />
        <form onSubmit={handleSubmit}>
          <div className="right_rest">
            <label htmlFor="name" className="lable">
              Name
            </label>
            <input type="text" id="name" name="name" className="input" onChange={handleChange} onBlur={handleBlur} />
            {errors && errors.name && touched.name ? (<span style={{ color: 'red', marginLeft: '0.5rem', marginTop: '-0.75rem', fontSize: '18px' }}>{errors.name}</span>) : (null)}
            <label htmlFor="number" className="lable">
              Mobile Number
            </label>
            <input type="number" id="number" name="number" className="input" value={values.number} onChange={handleChange} onBlur={handleBlur} />
            {errors && errors.number && touched.number ? (<span style={{ color: 'red', marginLeft: '1rem', marginTop: '-0.75rem', fontSize: '18px' }}>{errors.number}</span>) : (null)}
            <label htmlFor="amount" className="lable">
              Amount
            </label>
            <input type="number" id="amount" name="amount" className="input" value={values.amount} onChange={handleChange} onBlur={handleBlur} />
            {errors && errors.amount && touched.amount ? (<span style={{ color: 'red', marginLeft: '1rem', marginTop: '-0.75rem', fontSize: '18px' }}>{errors.amount}</span>) : (null)}
          </div>
          <button className="btn" type="submit" >Pay</button>
        </form>
      </div>
    </div>
  );
};

export default NewPayment;
