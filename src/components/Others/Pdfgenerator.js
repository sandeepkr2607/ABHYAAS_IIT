// import { Input, Progress } from "@chakra-ui/react";
import {
  Center,
  Box,
  // Divider,
  // Heading,
  Text,
  HStack,
  VStack,
  Button,
  Divider
} from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
// import { Input } from "@chakra-ui/react";
import { Heading, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import logo from "../../assets/logo.png"

import { useRef } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Image, Stack } from "@chakra-ui/react";
import Header from "../header/Header";



export default function Pdfgenerator() {
  const navigate = useNavigate();
  const PDF = useRef();


  const [info, setInfo] = useState({
    applicationNo: '',
    targetCourse: '',
    studentName: '',
    fatherName: '',
    category: '',
    city: '',
    district: '',
    state: '',
    pinCode: ''
  });

  const [pic, setPic] = useState('');


  useEffect(() => {

    async function fetchData() {
      window.scrollTo(0, 0)
      const id = localStorage.getItem("id");
      if (!id) {
        navigate('/form')
        return
      }
      // const picture = localStorage.getItem("pic");
      // if (!picture) {
      //   setPic('');
      // } else {
      //   setPic(picture)
      // }

      const response = await fetch(`https://dev.seiasecure.com/api/v1/getCoachingApplicationById/${id}`);
      const data = await response.json();
      if (data.success === false) {
        navigate('/form')
        return
      }
      if (data.data.isVerified === false) {
        navigate('/otp')
        return
      }
      if (data.data.student_pic) {
        setPic(data.data.student_pic)
      }


      const newData = {}
      newData.applicationNo = data.data.applicationNo
      newData.targetCourse = data.data.targetCourse
      newData.studentName = data.data.studentName
      newData.fatherName = data.data.fatherName
      newData.category = data.data.category
      newData.city = data.data.city
      newData.district = data.data.district
      newData.targetClass = data.data.targetClass
      newData.state = data.data.state
      newData.pinCode = data.data.pinCode
      newData.mobileNo = data.data.mobileNo
      newData.gender = data.data.gender
      newData.academicSession = data.data.academicSession
      newData.email = data.data.email
      newData.createdAt = data.data.createdAt
      setInfo(newData);

    }
    fetchData();
  }, [])


  const generatePDF = useReactToPrint({
    content: () => PDF.current,
    documentTitle: "User",
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const homepagehandler = () => {
    navigate('/')
  }


  return (
    <>
      <ChakraProvider>
        <Center>
          <VStack>
            <Box
              // bg="blue.200"
              p={4}
              borderRadius="md"
              boxShadow="md"
              // width="1000px"
              textAlign="center"
              ref={PDF}
            >
              <Flex align="center" justify="center">
                <Image src={logo} boxSize={'65px'} >

                </Image>
                <Heading fontSize="xl" mb={2} style={{ marginTop: "22px" }} >
                  Application Form {info.academicSession}
                </Heading>

              </Flex>
              <Divider orientation="horizontal" bgColor={"black"} height={'1px'} />
              <HStack>

                <div
                  style={{
                    width: "180px", // Adjust the size for a passport photo
                    height: "180px", // Adjust the size for a passport photo
                    margin: "0 auto", // Center the avatar horizontally
                    overflow: "hidden", // Hide overflow if the image is larger
                    // border: "2px solid blue.200", 
                    border: "2px solid white", // Add a white border
                    marginTop: "-150px"
                  }}
                >
                  {/* <Avatar
                    size="full"
                    src={pic}
                    // alt={dummyData.name}
                    w="100%" // Make sure the image takes 100% of the container
                    h="100%" // Make sure the image takes 100% of the container
                    borderRadius={'none'}

                  /> */}
                </div>
                <Box pt={0} >

                  <TableContainer style={{ marginTop: "0px" }}>
                    <Table variant={"simple"} style={{ marginTop: "0" }}>
                      <Tbody style={{ marginTop: "0" }}>
                        <Tr>
                          <Td p={1}>Application No.</Td>
                          <Td p={1}>{info.applicationNo}</Td>
                        </Tr>
                        <Tr >
                          <Td p={1}>Student Name</Td>
                          <Td p={1}>{info.studentName}</Td>
                        </Tr>
                        <Tr >
                          <Td p={1}>Father Name</Td>
                          <Td p={1}>{info.fatherName}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Gender</Td>
                          <Td p={1}>{info.gender}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Course</Td>
                          <Td p={1}>{info.targetCourse}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Class</Td>
                          <Td p={1}>{info.targetClass}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Study Center</Td>
                          <Td p={1}>Raghunathpur,Motihari</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Mobile No.</Td>
                          <Td p={1}>{info.mobileNo}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Email</Td>
                          <Td p={1}>{info.email}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Pincode</Td>
                          <Td p={1}>{info.pinCode}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>State</Td>
                          <Td p={1}>{info.state}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
                <div
                  style={{
                    width: "100px", // Adjust the size for a passport photo
                    height: "120px", // Adjust the size for a passport photo
                    margin: "0 auto", // Center the avatar horizontally
                    overflow: "hidden", // Hide overflow if the image is larger
                    border: "2px solid none", 
                    marginTop: "-150px"// Add a white border
                  }}
                >
                     <Avatar
                    size="full"
                    src={pic}
                    // alt={dummyData.name}
                    w="100%" // Make sure the image takes 100% of the container
                    h="100%" // Make sure the image takes 100% of the container
                    borderRadius={'none'}

                  />
                </div>
              </HStack>
              <Text fontWeight={'bold'} textAlign={'start'} mt={5}>Important Instrustions:-</Text>
              <Text textAlign={'start'} ml={50}>
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
              </Text>
              <Text fontWeight={'bold'} textAlign={'start'} mt={5}>IMPORTANT:-Lorem ipsum dolor sit amet Consectetur adipiscing elit
              Integer molestie </Text>
              <Text fontWeight={'bold'} textAlign={'start'}>
              lorem at massa 
              Facilisis in pretium nisl aliquet
              </Text>
        
              <Flex justify="center" mt={4}>
                <Text fontSize="sm" fontStyle="italic">
                  This admit card is valid for the specified exam only. Submitted at {info.createdAt}
                </Text>
              </Flex>
            </Box>
            <HStack>
            <Button onClick={generatePDF}>
              Download PDF
            </Button>
            <Button onClick={homepagehandler}>
              Go to Home Page
            </Button>
            </HStack>
          </VStack>
        </Center>
      </ChakraProvider>
    </>
  );
}
