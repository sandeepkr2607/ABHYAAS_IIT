import { ChakraProvider, HStack } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    ModalBody,
    Center,
    VStack,
    Image,
    FormControl,
   Textarea,
    Select,
    Input,
    Button,
    Box
  } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
  import model_img from "../../assets/model_img.png"
  import { useState } from "react";
import React from 'react'

export default function FormModel(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [open,setOpen]=useState(props.isOpen)
  const onclose=()=>{
        setOpen(false)
  }
  return (
   <>
   <ChakraProvider>
   <Modal isOpen={open} onClose={onClose} isCentered> 
        <ModalOverlay />
        
        <ModalContent >
          <Center marginBottom={0}>
            <Image src={model_img} p={2}></Image>
          </Center>
          <ModalBody m={0} height={'90%'}>
            <Center marginTop={0}>
              <VStack spacing={2} margin={0}>
                <VStack spacing={0}>
                <Text fontWeight={"bold"} color={"black.300"} fontSize={"25"}>
                Your Preference Matters,
                </Text>
                <Text fontWeight={"bold"} color={"gray.600"} fontSize={"20"}>
                Let's Get to Know You.
                </Text>
                </VStack>
                <FormControl isRequired>
                <Input
                      placeholder="Enter Your Name *"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                    />
                  </FormControl>
                <FormControl isRequired>
                <Input
                      placeholder="Mobile Number *"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                    />
                  </FormControl>
                  <FormControl>
                    <Select
                      placeholder="Standerd"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}>
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                  <Textarea placeholder='Feel free for any kind of query.....' rounded={"2xl"} boxShadow={"base"} />
                  </FormControl>
                <HStack spacing={5}>
                <Button
                    color={"gray.700"}
                    bgColor={"gray.400"}
                    size="md"
                    rounded={"full"}
                    width={"80%"}
                    marginTop={"1%"}
                    onClick={onclose}
                    >
                    Cencel
                  </Button>
                <Button
                    colorScheme="orange"
                    size="md"
                    rounded={"full"}
                    width={"80%"}
                    marginTop={"1%"}
                    >
                   Submit
                  </Button>
                </HStack>

              </VStack>
            </Center>
          </ModalBody>

          <Center>
        
          </Center>
        </ModalContent>
    
      </Modal>

   </ChakraProvider>
   </>
  )
}
