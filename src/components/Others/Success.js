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
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Success() {
  return (
    <ChakraProvider>
      <Modal isOpen={true}>
        <ModalOverlay />
        <ModalContent p={25}>
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
              marginTop={"2%"}>
              Go to Home Page
            </Button>
          </Center>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
