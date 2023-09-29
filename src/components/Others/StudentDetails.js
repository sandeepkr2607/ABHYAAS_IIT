// import React from 'react'
import {  useLocation } from 'react-router-dom';


// export default function StudentDetails(props) {
//     const location=useLocation();
//     const { state } = location;
//     console.log(state);
//   return (
//     <div>StudentDetails</div>
//   )
// }
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
    Divider,
  } from "@chakra-ui/react";
  import { UnorderedList, ListItem } from "@chakra-ui/react";
  // import { Input } from "@chakra-ui/react";
  import { Heading, Flex } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { Avatar } from "@chakra-ui/react";
  import logo from "../../assets/logo.png";
  
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
  } from "@chakra-ui/react";
  import { Image, Stack } from "@chakra-ui/react";
  // import Header from "../header/Header";
  
  export default function StudentDetails(props) {
        const location=useLocation();
        const { state } = location;
    const navigate = useNavigate();
    const PDF = useRef();
  
    const [info, setInfo] = useState({
      applicationNo: "",
      targetCourse: "",
      studentName: "",
      fatherName: "",
      category: "",
      city: "",
      school:"",
      gender:"",
      district: "",
      state: "",
      pinCode: "",
    });
  
    const [pic, setPic] = useState("");
  
    useEffect(() => {
      async function fetchData() {
        window.scrollTo(0, 0);
        // const id = localStorage.getItem("id");
        // if (!id) {
        //   navigate("/form");
        //   return;
        // }
        // const picture = localStorage.getItem("pic");
        // if (!picture) {
        //   setPic('');
        // } else {
        //   setPic(picture)
        // }
        if(!state){
            navigate("/error");
            return;
        }
        const response = await fetch(
          `https://dev.seiasecure.com/api/v1/getCoachingApplicationById/${state}`
        );
        const data = await response.json();
        if (data.success === false) {
          navigate("/form");
          return;
        }
        // if (data.data.isVerified === false) {
        //   navigate('/otp')
        //   return
        // }
        if (data.data.student_pic) {
          setPic(data.data.student_pic);
        }
        
        const newData = {};
        newData.applicationNo = data.data.applicationNo;
        newData.targetCourse = data.data.targetCourse;
        newData.studentName = data.data.studentName;
        newData.fatherName = data.data.fatherName;
        newData.category = data.data.category;
        newData.city = data.data.city;
        newData.district = data.data.district;
        newData.targetClass = data.data.targetClass;
        newData.state = data.data.state;
        newData.pinCode = data.data.pinCode;
        newData.mobileNo = data.data.mobileNo;
        newData.gender = data.data.gender;
        newData.academicSession = data.data.academicSession;
        newData.email = data.data.email;
        newData.createdAt = data.data.createdAt;
        newData.school=data.data.school
        setInfo(newData);
      }
      fetchData();
    }, []);
    const generatePDF = useReactToPrint({
      content: () => PDF.current,
      documentTitle: "User",
      onAfterPrint: () => alert("Data saved in PDF"),
    });
  
    const homepagehandler = () => {
      navigate("/error");
    };
  
    return (
      <>
        <ChakraProvider>
          <Center>
            <VStack>
              <Box
                p={4}
                borderRadius="md"
                boxShadow="md"
                textAlign="center"
                ref={PDF}
                maxW="1000px" // Set a maximum width for the box
                width={["98%", "100%", "100%", "90%"]}
                mx="auto"
              >
                <Flex align="center" justify="center">
                  <Image src={logo} boxSize={"65px"} />
                  <Heading fontSize="xl" mb={2} style={{ marginTop: "22px" }}>
                    Application Form {info.academicSession}
                  </Heading>
                </Flex>
                <Divider
                  orientation="horizontal"
                  bgColor={"black"}
                  height={"1px"}
                />
                <Flex justify="space-between">
                  <Box
                    p={4}
                    borderRadius="md"
                    textAlign="center"
                    maxWidth="1000px"
                    width="90%"
                    mx="auto"
                    flexDirection={{ base: "column", lg: "row" }} // Adjust layout based on screen size
                    alignItems={{ base: "center", lg: "flex-start" }}
                  >
                    <Flex
                      flexDirection={{
                        base: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                      }} // Adjust layout based on screen size
                      align={{ base: "center", lg: "flex-start" }} // Align items to top on large screens
                    >
  
                      <Box
                        width={["180px","250px"]}
                        height={["180px","160px"]}
                        margin="0 auto"
                        overflow="hidden"
                        border="2px solid white"
                        // objectFit={"contain"}
                        marginTop={{ base: "0", sm:"-130px",md: "-130px", lg: "0" }} // Adjust top margin on large screens
                        marginLeft={{ base: "0", sm:"0px",md: "0px", lg: "0" }}
                        marginRight={{ base: "0", sm:"40px",md: "50px", lg: "50px" }}
                      >
                        <Image
                          // size="full"
                          src={pic}
                          boxSize={"150px"}
                          borderRadius="none"
                        />
                      </Box>
                      <Box pt={0} flex={{ base: "none", lg: "1" }} 
                      marginLeft={{base:"40px"}} 
                      >
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
                              <Tr>
                                <Td p={1}>Father Name</Td>
                                <Td p={1}>{info.fatherName}</Td>
                              </Tr>
                              <Tr>
                                <Td p={1}>Gender</Td>
                                <Td p={1}>{info.gender}</Td>
                              </Tr>
                              <Tr>
                                <Td p={1}>Category</Td>
                                <Td p={1}>{info.category}</Td>
                              </Tr>
                              
                              <Tr>
                                <Td p={1}>School</Td>
                                <Td p={1}>{info.school}</Td>
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
                    </Flex>
                  </Box>
                </Flex>
  <Box mt={5} pl={[20, 4]} pr={[16,20]}>
        <Text fontWeight="bold" textAlign="start">
          Important Instructions:-
        </Text>
        <UnorderedList ml={["0", "20px"]} spacing={2}>
          <ListItem>
            <Text textAlign="start" width={['100%', '600px']}>
              Limited seats only. Registration for these classes shall close once a batch is full. Any Registration request received after that shall be liable to be Cancelled even after automated mail reply is received by students.
            </Text>
          </ListItem>
          <ListItem>
            <Text textAlign="start" width={['100%', '600px']}>
              Students are advised to make a confirmatory call to the Institute after Registration for the crash course.
            </Text>
          </ListItem>
          {/* ... Add more list items as needed */}
          <ListItem>
            <Text textAlign="start" width={['100%', '600px']}>
            Students who plan to join AbhyaasIIT Institute in the upcoming session are advised to take the Crash Course as it will help improve
             their performance in Admission Entrance Tests (AET) for the courses of 2024 session
            </Text>
          </ListItem>
          <ListItem>
            <Text textAlign="start" width={['100%', '600px']}>
            This course shall cover Mathematics and Science upto Olympiad level where a student will be enabled to compete at National and International stage
            </Text>
          </ListItem>
          <ListItem>
            <Text textAlign="start" width={['100%', '600px']}>
            The students will go through a highly intense competitive environment with Daily Practice Papers(DPPs) and weekly Output Tests(OTs).
            </Text>
          </ListItem>
          <ListItem>
            <Text textAlign="start" width={['100%', '600px']}>
            Each student will be assigned to a personal IITian Mentor who will conduct bi-Monthly review of the student and conduct meeting with Parents every month in order to develop
             the environment of child In and Out of the Institute
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
                <Flex justify="center" mt={4} px={10} py={0}>
                  <Text fontSize="sm" fontStyle="italic">
                    This admit card is valid for the specified exam only.
                    Submitted at {info.createdAt}
                  </Text>
                </Flex>
              </Box>
              <HStack>
                <Button onClick={generatePDF}>Download PDF</Button>
                <Button onClick={homepagehandler}>Go to Home Page</Button>
              </HStack>
            </VStack>
          </Center>
        </ChakraProvider>
      </>
    );
  }
  
