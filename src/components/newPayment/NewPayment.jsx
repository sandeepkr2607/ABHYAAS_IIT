import React, { useState, useEffect } from "react";
import { ValidationSchema } from "./schema";
import { useFormik } from "formik";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import "./NewPayment.css";

const NewPayment = () => {
  const [studentData, setstudentData] = useState();
  const [StudentName, setStudentName] = useState();
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dev.seiasecure.com/api/v1/getCoachingApplicationById/${id}`
        );
        const data = await response.json();

        console.log(data);
        setstudentData(data);
        if (data && data.data) {
          setStudentName(data.data.studentName);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const initialValues = {
    userId: `${id}`,
    number: "",
    amount: 605,
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ValidationSchema,
      onSubmit: async () => {
        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          };
          console.log(values);
          const response = await fetch(
            `https://dev.seiasecure.com/api/v1/initiate_payment`,
            options
          );
          const json = await response.json();
          console.log(json.url);
          if (json.success) {
            console.log("Payment received");

            //redirect to success page
            redirectToExternalURL(json.url);
          } else {
            console.log("failed ");
          }
        } catch (error) {
          console.log(error);
        }
      },
    });

  const redirectToExternalURL = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <ChakraProvider>
        <Box width={"100%"}>
          <Box>
            <Header></Header>
          </Box>
          <Center>
            <Box
              boxShadow={"base"}
              width={["100%", "80%"]}
              height={["100%", "auto"]}
              rounded={"lg"}
              mx={2}
              marginTop={3}
              marginBottom={[0, 10]}>
              <Center>
                <HStack spacing={2} my={8}>
                  <Box
                    bgColor={"orange"}
                    rounded={"xl"}
                    width={{ base: 6, md: 6 }}
                    height={"auto"}
                    textColor={"white"}>
                    1
                  </Box>
                  <Progress
                    value={100}
                    size="sm"
                    ml={0}
                    width={{ base: 12, md: 20 }}
                    colorScheme="orange"
                    rounded={"md"}
                  />

                  {/* Step 2 */}
                  <Box
                    bgColor={"orange"}
                    rounded={"xl"}
                    width={{ base: 6, md: 6 }}
                    height={"auto"}
                    textColor={"white"}>
                    2
                  </Box>
                  <Progress
                    value={100}
                    size="sm"
                    ml={0}
                    width={{ base: 12, md: 20 }}
                    colorScheme="orange"
                    rounded={"md"}
                  />

                  {/* Step 3 */}
                  <Box
                    bgColor={"orange"}
                    rounded={"xl"}
                    width={{ base: 6, md: 6 }}
                    height={"auto"}
                    textColor={"white"}>
                    3
                  </Box>
                  <Progress
                    value={100}
                    size="sm"
                    ml={0}
                    width={{ base: 12, md: 20 }}
                    colorScheme="orange"
                    rounded={"md"}
                  />

                  {/* Step 4 */}
                  <Box
                    bgColor={"orange"}
                    rounded={"xl"}
                    width={{ base: 6, md: 6 }}
                    height={"auto"}
                    textColor={"white"}>
                    4
                  </Box>
                </HStack>
              </Center>

              {/* ----------------Progress bar---------------- */}
              <Divider orientation="horizontal" bgColor={"black"} />

              {/* ----------------------------------------payment window---------------------------------------- */}

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
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input"
                        value={StudentName}
                        style={{ height: "40px" }}
                      />
                      <label htmlFor="number" className="lable">
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="input"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ height: "40px" }}
                      />
                      {errors && errors.number && touched.number ? (
                        <span
                          style={{
                            color: "red",
                            marginLeft: "1rem",
                            marginTop: "-0.75rem",
                            fontSize: "18px",
                          }}>
                          {errors.number}
                        </span>
                      ) : null}
                      <label htmlFor="amount" className="lable">
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="input"
                        value={605.77}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ height: "40px" }}
                      />
                      {errors && errors.amount && touched.amount ? (
                        <span
                          style={{
                            color: "red",
                            marginLeft: "1rem",
                            marginTop: "-0.75rem",
                            fontSize: "18px",
                          }}>
                          {errors.amount}
                        </span>
                      ) : null}
                    </div>
                    <button className="btn" type="submit">
                      Pay
                    </button>
                  </form>
                </div>
              </div>
            </Box>
          </Center>
          <Box>
            <Footer></Footer>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default NewPayment;
