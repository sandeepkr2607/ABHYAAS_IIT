// import { AlertDescription,AlertTitle,Alert,AlertIcon,Center,Button} from "@chakra-ui/react"
// import { LinkBox,Box,Heading,LinkOverlay,Text } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  ModalBody,
  Center,
  VStack,
  // AbsoluteCenter
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider,Box } from "@chakra-ui/react";
// import Header from "../header/Header.jsx";
// import Footer from "../footer/Footer.jsx";
import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const Submithandler = () => {
    navigate("/");
  };

  return (
    <ChakraProvider>
       {/* <Box>
          <Header></Header>
        </Box> */}
      <Modal isOpen={true}>
        <ModalOverlay />
       
        <ModalContent p={25} marginTop={120}>
          <Center>
            <ModalHeader color={"green.500"}>
              <CheckCircleIcon boxSize={20} />
            </ModalHeader>
          </Center>

          <ModalBody p={15}>
            <Center>
              <VStack>
                <Text fontWeight={"bold"} color={"green.500"} fontSize={"30"}>
                  SUCCESS
                </Text>
                <Text fontWeight={"bold"} fontSize={"20"}>
                  Thank You
                </Text>
                <Text>Shortly you will find a confirmmation in your email</Text>
              </VStack>
            </Center>
          </ModalBody>

          <Center>
            <Button
              colorScheme="orange"
              size="lg"
              rounded={"full"}
              width={"50%"}
              marginTop={"2%"}
              onClick={Submithandler}
              >
              Go to Home Page
            </Button>
          </Center>
        </ModalContent>
     
      </Modal>
      {/* <Box>
          <Footer></Footer>
        </Box> */}
    </ChakraProvider>
  );
}
