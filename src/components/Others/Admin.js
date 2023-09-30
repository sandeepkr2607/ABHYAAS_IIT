import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormControl, Input,FormLabel,Button,useToast } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';

export default function Admin() {
const [password,setPassword]=useState("");
const toast=useToast()
const navigate=useNavigate();
  const handlePassword=(e)=>{
      setPassword(e.target.value);
  }
  const handleSubmit=async()=>{
const response = await fetch(
        "https://dev.seiasecure.com/api/v1/getAllCoachingApplications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
                password:password
          }),
        }
        );
 const data=await response.json();
 if(data.success===false){
  toast({
    title: "Not Valid Password",
    description: "Password is not Valid",
    position: "top",
    status: "error",
    duration: 9000,
    isClosable: true,
  });
  return;
 }
 navigate("/errorregabhyaasIIT2023", { state: password });


  }

  return (
    <>
    <ChakraProvider>
       <FormControl>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Password" onChange={handlePassword}></Input>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </FormControl>
      </ChakraProvider>
    </>
  )
}
