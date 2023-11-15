import React, { useEffect } from "react";
import css from "./PrivecyPolicy.module.css";

const PrivecyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.PrivecyPolicy}>
      <h2 className={css.heading}>
        Abhyaas IIT Educational Group of Institutes Website Policy
      </h2>
      <div className={css.group}>
        <p className={css.main_Headings}>1. Introduction</p>
        <p className={css.desc}>
          Welcome to the Abhyaas IIT Educational Group of Institutes website.
          This Website Policy outlines the terms and conditions governing your
          use of our website and the associated payment gateway. By accessing or
          using our website, you agree to comply with the terms outlined in this
          policy.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>2. Payment Processing</p>
        <p className={css.sub_Headings}>2.1 Payment Gateway:</p>
        <p className={css.desc}>
          Abhyaas IIT Educational Group uses a secure payment gateway provided
          by PhonePe. All transactions are securely processed to ensure the
          confidentiality and integrity of your financial information.
        </p>
        <p className={css.sub_Headings}>2.2 Accepted Payment Methods:</p>
        <p className={css.desc}>
          We accept payments through credit cards, debit cards, and other online
          payment methods facilitated by our payment gateway.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>3. Security Measures</p>
        <p className={css.sub_Headings}>3.1 Data Encryption:</p>
        <p className={css.desc}>
          Our website uses industry-standard encryption protocols (SSL) to
          secure your online transactions and protect your sensitive
          information.
        </p>
        <p className={css.sub_Headings}>3.2 Payment Gateway Security:</p>
        <p className={css.desc}>
          The payment gateway employed by Abhyaas IIT Educational Group adheres
          to stringent security measures to safeguard your financial data.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>4. User Responsibilities</p>
        <p className={css.sub_Headings}>4.1 Account Security:</p>
        <p className={css.desc}>
          Users are responsible for safeguarding their login credentials. Report
          any unauthorized access to your account promptly.
        </p>
        <p className={css.sub_Headings}>4.2 Transaction Accuracy:</p>
        <p className={css.desc}>
          Ensure the accuracy of your transaction details before making
          payments. Abhyaas IIT Educational Group is not responsible for errors
          made during the payment process.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>5. Refund Policies</p>
        <p className={css.sub_Headings}>5.1 Refund Procedure:</p>
        <p className={css.desc}>
          Refunds for eligible transactions will be processed according to our
          following Refund Policy. <br /> <br /> In all cases where you make a
          refund request, the request must come to us in either one of the two
          forms given below: <br /> <br />
          ● In the form of an email sent by you from the SAME email address
          which was submitted by you to us at the time of registration for the
          product/service <br /> <br />
          ● In the form of a letter signed by you to reach our registered
          office.
          <br />
          <br />
          If your refund request satisfies the above terms, the amount (after
          deduction of all applicable taxes and levies) would be refunded after
          deducting a penalty decided by the Management depending on the
          services availed so far.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>6. Data Collection and Privacy</p>
        <p className={css.sub_Headings}>6.1. Data Collection Policy -</p>
        <p className={css.desc}>
          Information Collected:
          <br />
          Abhyaas IIT Educational Group collects personal information, including
          but not limited to names, contact details, and academic records, to
          facilitate the application, enrollment, and educational processes.
          Additionally, website analytics may be collected to enhance user
          experience.
        </p>
        <p className={css.sub_Headings}>6.2. Privacy Policy -</p>
        <p className={css.desc}>
          Confidentiality:
          <br />
          Abhyaas IIT Educational Group is committed to maintaining the
          confidentiality of all personal information collected. We do not
          share, sell, or disclose personal information to third parties unless
          required by law or with explicit consent from the individual.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>7. Confirmation and Receipts</p>
        <p className={css.sub_Headings}>7.1 Transaction Confirmation:</p>
        <p className={css.desc}>
          Upon successful completion of a transaction, users will receive a
          confirmation email and/or be redirected to a transaction confirmation
          page.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>8. Disclaimer of Liability</p>
        <p className={css.sub_Headings}>8.1 Limitation of Liability:</p>
        <p className={css.desc}>
          Abhyaas IIT Educational Group is not liable for any damages or losses
          resulting from technical errors, security breaches, or issues related
          to the payment gateway.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>9. Updates and Modifications</p>
        <p className={css.sub_Headings}>9.1 Policy Changes:</p>
        <p className={css.desc}>
          Abhyaas IIT Educational Group reserves the right to update or modify
          this policy. Users will be notified of changes through the website.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>10. Termination of Access</p>
        <p className={css.sub_Headings}>10.1 Access Termination:</p>
        <p className={css.desc}>
          Abhyaas IIT Educational Group may terminate or restrict user access to
          the payment gateway for violations of this policy.
        </p>
      </div>
      <div className={css.group}>
        <p className={css.main_Headings}>11. Contact Information</p>
        <p className={css.desc}>
          For any questions or concerns related to payments or the payment
          gateway, please contact us at info@abhyaasiit.com
        </p>
        <p className={css.desc}>
          Thank you for choosing Abhyaas IIT Educational Group of Institutes.
        </p>
      </div>
    </div>
  );
};

export default PrivecyPolicy;
