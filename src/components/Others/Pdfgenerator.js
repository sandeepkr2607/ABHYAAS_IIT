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
        {/* <Center>
          <VStack>
            <Box
              p={4}
              borderRadius="md"
              boxShadow="md"
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
                    width: "180px", 
                    height: "180px", 
                    margin: "0 auto", 
                    overflow: "hidden", 
                    border: "2px solid white", 
                    marginTop: "-150px"
                  }}
                >
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
                    width: "100px", 
                    height: "120px", 
                    margin: "0 auto", 
                    overflow: "hidden", 
                    border: "2px solid none", 
                    marginTop: "-150px"
                  }}
                >
                     <Avatar
                    size="full"
                    src={pic}
                    w="100%" 
                    h="100%" 
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
        </Center> */}

<Center>
      <VStack>
        <Box
          p={4}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          ref={PDF}
          maxW="1000px" // Set a maximum width for the box
          width="90%" // Set a responsive width
          mx="auto" // Center the box horizontally
        >
          <Flex align="center" justify="center">
            <Image src={logo} boxSize={'65px'} />
            <Heading fontSize="xl" mb={2} style={{ marginTop: "22px" }}>
              Application Form {info.academicSession}
            </Heading>
          </Flex>
          <Divider orientation="horizontal" bgColor={"black"} height={'1px'} />
          {/* <HStack> */}
            {/* ... Rest of your code ... */}
            {/* <div
                  style={{
                    width: "180px", 
                    height: "180px", 
                    margin: "0 auto", 
                    overflow: "hidden", 
                    border: "2px solid white", 
                    marginTop: "-150px"
                  }}
                >
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
                    width: "100px", 
                    height: "120px", 
                    margin: "0 auto", 
                    overflow: "hidden", 
                    border: "2px solid none", 
                    marginTop: "-150px"
                  }}
                >
                     <Avatar
                    size="full"
                    src={pic}
                    w="100%" 
                    h="100%" 
                    borderRadius={'none'}
                  />
                </div> */}
                  <Flex justify="center">
      <Box
        p={4}
        borderRadius="md"
        // boxShadow="md"
        textAlign="center"
        maxWidth="1000px"
        width="90%"
        mx="auto"
        flexDirection={{ base: 'column', lg: 'row' }} // Adjust layout based on screen size
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        {/* <Flex align="center" justify="center"  direction={{ base: "column", lg: "row" }}> */}
          {/* Add your image or avatar here */}

        {/* </Flex> */}
        {/* <Divider orientation="horizontal" bgColor={"black"} height={'1px'} /> */}

        <Flex
          flexDirection={{ base: 'column', lg: 'row' }} // Adjust layout based on screen size
          align={{ base: 'center', lg: 'flex-start' }} // Align items to top on large screens
        >


        <Box pt={0} flex={{ base: 'none', lg: '1' }}>
          <TableContainer style={{ marginTop: "0px" }}>
            <Table variant={"simple"} style={{ marginTop: "0" }}>
              <Tbody style={{ marginTop: "0" }}>
                <Tr>
                  <Td p={1}>Application No.</Td>
                  <Td p={1}>{info.applicationNo}</Td>
                </Tr>
                <Tr>
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
                {/* Add other info fields in a similar manner */}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Flex
            align="center"
            justify="center"
            flex={{ base: 'none', lg: '1' }}
            mt={{ base: '4', lg: '0' }} // Add top margin on small screens
          >
            <Box
              width="120px"
              height="120px"
              margin="0 auto"
              overflow="hidden"
              border="2px solid white"
              marginTop={{ base: '0', lg: '0' }} // Adjust top margin on large screens
              marginLeft={{ base: '0', lg: '90px' }}
            >
              <Avatar
                size="full"
                src={pic}
                w="100%"
                h="100%"
                borderRadius="none"
              />
            </Box>
          </Flex>


        </Flex>
      </Box>
    </Flex>
          {/* </HStack> */}
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
