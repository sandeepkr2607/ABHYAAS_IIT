import React from "react";
import "./NewPayment.css";

const NewPayment = () => {
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
        <div className="right_rest">
          <label htmlFor="name" className="lable">
            Name
          </label>
          <input type="text" className="input" />
          <label htmlFor="number" className="lable">
            Mobile Number
          </label>
          <input type="number" className="input" />
          <label htmlFor="amount" className="lable">
            Amount
          </label>
          <input type="number" className="input" />
        </div>
        <button className="btn">Pay</button>
      </div>
    </div>
  );
};

export default NewPayment;
