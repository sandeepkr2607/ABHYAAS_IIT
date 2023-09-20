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
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";




export default function Success() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const Submithandler = () => {
    navigate("/");
  };

  const downloadPdf=()=>{
  navigate('/pdf')
    console.log("yes")
  }

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
              width={"40%"}
              marginTop={"2%"}
              marginRight={"8"}
              onClick={downloadPdf}
              >
              Download PDF
            </Button>
            <Button
              colorScheme="orange"
              size="lg"
              rounded={"full"}
              width={"40%"}
              marginTop={"2%"}
              px={4}
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
