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
  const toast = useToast()
  const navigate = useNavigate();

  const [pin, setPin] = useState('');
  const [mobile,setMobile]=useState('')


  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0)
      const id = localStorage.getItem("id");
      if (!id) {
        navigate('/form')
        return
      }

      const response = await fetch(`https://dev.seiasecure.com/api/v1/getCoachingApplicationById/${id}`);
      const data = await response.json();
      if(data.success===false){
        navigate('/form')
        return
      }

      setMobile(data.data.mobileNo)

    }
    fetchData();
  
  }, [])

  const handlePinChange = (value) => {
    setPin(value);
  };
 
  const onSendAgain=async ()=>{
    const id = localStorage.getItem("id");
    // const phone=localStorage.getItem("mobile")
    const otpResponse=await fetch(`https://dev.seiasecure.com/api/v1/send_otp/${id}`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
     },
     body:JSON.stringify({"mobileNo":mobile})
    })
    const data=await otpResponse.json();
    console.log(data);
  }

  
  const Submithandler =async () => {
    // console.log(pin)
    // const phone=localStorage.getItem("mobile")
    const id = localStorage.getItem("id");
    const Response=await fetch(`https://dev.seiasecure.com/api/v1/verify_otp/${id}`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
     },
     body:JSON.stringify({"mobileNo":mobile,"otpNumber":pin})
    })
    const data=await Response.json();
    console.log(data)
    
    if(data.success===false){
      toast({
        title: 'Otp not veified',
        description: "Do send Again",
        position:'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
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
                    {mobile}
                  </Text>
                </HStack>
                <Text>Please Enter your OTP below</Text>
              </Box>
            </Center>
            <Center>
              <HStack p={10}>
                <PinInput value={pin} onChange={handlePinChange}>
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
                
                  <Button color={"orange"} bgColor={"white"} onClick={onSendAgain}>Send Again</Button>
               
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
