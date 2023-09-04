import { HStack, Text, Heading } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Otp() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const Submithandler = () => {
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
            boxShadow={"base"}
            width={["100%", "50%"]}
            rounded={"lg"}
            p={10}
            m={10}>
            <Center>
              <Box m={3} marginTop={8}>
                <Heading textStyle="h1" fontWeight={"bold"} fontSize={"lg"} m={3}>
                  Enter Your OTP
                </Heading>
                <HStack m={3}>
                  <Text textStyle="p">OTP was sended to</Text>
                  <Text color={"orange"} fontWeight={"bold"}>
                    +917364863246
                  </Text>
                </HStack>
                <Text>Please Enter your OTP below</Text>
              </Box>
            </Center>
            <Center>
              <HStack p={10}>
                <PinInput>
                  <PinInputField boxShadow={"base"} />
                  <PinInputField boxShadow={"base"} />
                  <PinInputField boxShadow={"base"} />
                  <PinInputField boxShadow={"base"} />
                  <PinInputField boxShadow={"base"} />
                  <PinInputField boxShadow={"base"} />
                </PinInput>
              </HStack>
            </Center>
            <Button
              colorScheme="orange"
              size="lg"
              rounded={"full"}
              width={"40%"}
              marginTop={"4%"}
              marginBottom={"2%"}
              onClick={Submithandler}>
              next
            </Button>
            <Center>
              <HStack>
                <Text textStyle="p">OTP Not Received?</Text>
                <Text color={"orange"} fontWeight={"bold"}>
                  Send Again
                </Text>
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
