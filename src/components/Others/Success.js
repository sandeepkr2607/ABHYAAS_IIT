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
      <Center>
<Modal isOpen={true}>
          <ModalOverlay /> 
          <ModalContent
            p={[2, 4, 6]} // Responsive padding
            width={['90%', '80%', '60%']} // Responsive width
          >
            <Center>
              <ModalHeader color={'green.500'}>
                {/* Adjust the CheckCircleIcon boxSize as needed */}
                <CheckCircleIcon boxSize={20} />
              </ModalHeader>
            </Center> 
            <ModalBody p={4}>
              <Center>
                <VStack spacing={4}>
                  <Text fontWeight={'bold'} color={'green.500'} fontSize={['xl', '2xl', '3xl']}>
                    SUCCESS
                  </Text>
                  <Text fontWeight={'bold'} fontSize={['lg', 'xl', '2xl']}>
                    Thank You
                  </Text>
                  <Text fontSize={['xs', 'md', 'md']}>
                    Shortly you will find a confirmation in your email
                  </Text>
                </VStack>
              </Center>
            </ModalBody> 
            <Center>
              <Button
                colorScheme="orange"
                size={['xs', 'md', 'xl']} // Responsive button size
                rounded={'full'}
                width={['80%', '60%', '50%']} // Responsive button width
                marginTop={['4%', '3%', '2%']} // Responsive margin-top
                marginRight={['2', '4', '8']} // Responsive margin-right
                px={[1, 4, 6]}
                py={[6,4,3]}
                onClick={downloadPdf}
              >
            Download PDF
              </Button>
              <Button
                colorScheme="orange"
                size={['xs', 'md', 'xl']} // Responsive button size
                rounded={'full'}
                width={['80%', '60%', '50%']} // Responsive button width
                marginTop={['4%', '3%', '2%']} // Responsive margin-top
                px={[1, 4, 6]} // Responsive padding-x
                py={[6,4,3]}
                onClick={Submithandler}
              >
                Go to Home Page
              </Button>
            </Center>
          </ModalContent>
        </Modal>



      </Center>
    </ChakraProvider>
  );
}
