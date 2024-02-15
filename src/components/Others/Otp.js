import { HStack, Text, Heading } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function Otp() {
  const toast = useToast();
  const navigate = useNavigate();

  const [pin, setPin] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      const id = localStorage.getItem("id");
      if (!id) {
        navigate("/form");
        return;
      }

      const response = await fetch(
        `https://dev.abhyaasiit.com/api/v1/getCoachingApplicationById/${id}`
      );
      const data = await response.json();
      if (data.success === false) {
        navigate("/form");
        return;
      }

      setMobile(data.data.mobileNo);
    }
    fetchData();
  }, []);

  const handlePinChange = (value) => {
    setPin(value);
  };

  const onSendAgain = async () => {
    const id = localStorage.getItem("id");
    // const phone=localStorage.getItem("mobile")
    const otpResponse = await fetch(
      `https://dev.abhyaasiit.com/api/v1/send_otp/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNo: mobile }),
      }
    );
    const data = await otpResponse.json();
    console.log(data);
  };

  const Submithandler = async () => {
    // console.log(pin)
    // const phone=localStorage.getItem("mobile")
    const id = localStorage.getItem("id");
    const Response = await fetch(
      `https://dev.abhyaasiit.com/api/v1/verify_otp/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNo: mobile, otpNumber: pin }),
      }
    );
    const data = await Response.json();
    console.log(data);

    if (data.success === false) {
      toast({
        title: "Otp not veified",
        description: "Do send Again",
        position: "top",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    navigate("/personal");
  };
  return (
    <>
      <ChakraProvider>
        <Box>
          <Header></Header>
        </Box>

        <Center>
          <Box
            width={["100%", "80%", "50%"]} // Adjust width for different screen sizes
            rounded={"lg"}
            p={[5, 10]}
            m={[3, 10]}
            boxShadow={"base"}>
            <Center>
              <Box m={3} marginTop={8}>
                <Heading fontWeight={"bold"} fontSize={["xl", "2xl"]} m={3}>
                  Enter Your OTP
                </Heading>
                <HStack m={3}>
                  <Text>OTP was sent to</Text>
                  <Text color={"orange"} fontWeight={"bold"}>
                    {mobile}
                  </Text>
                </HStack>
                <Text>Please enter your OTP below</Text>
              </Box>
            </Center>
            <Center>
              <HStack p={3}>
                <PinInput value={pin} onChange={handlePinChange}>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <PinInputField key={index} boxShadow={"base"} />
                  ))}
                </PinInput>
              </HStack>
            </Center>
            <Button
              colorScheme="orange"
              size="lg"
              rounded={"full"}
              width={["100%", "60%", "40%"]} // Adjust button width for different screen sizes
              marginTop={"4%"}
              marginBottom={"2%"}
              onClick={Submithandler}>
              Next
            </Button>
            <Center>
              <HStack>
                <Text>OTP Not Received?</Text>
                <Button
                  color={"orange"}
                  bgColor={"white"}
                  onClick={onSendAgain}
                  fontSize={["sm", "md"]} // Adjust font size for different screen sizes
                >
                  Send Again
                </Button>
              </HStack>
            </Center>
          </Box>
        </Center>
        <Box>
          <Footer></Footer>
        </Box>
      </ChakraProvider>
    </>
  );
}
