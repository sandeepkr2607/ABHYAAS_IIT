import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Input,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";

import { ChakraProvider, Box } from "@chakra-ui/react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    const response = await fetch(
      "https://dev.abhyaasiit.com/api/v1/getAllCoachingApplications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      }
    );
    const data = await response.json();
    if (data.success === false) {
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
  };

  return (
    <>
      <ChakraProvider>
        <Box
          style={{
            textAlign: "center",
            margin: "20px",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <FormControl
            style={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <FormLabel
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ff914c",
              }}>
              Enter Password
            </FormLabel>
            <Input
              placeholder="Password"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
              onChange={handlePassword}
            />
            <Button
              type="submit"
              style={{
                backgroundColor: "#ff914c",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={handleSubmit}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </ChakraProvider>
    </>
  );
}
