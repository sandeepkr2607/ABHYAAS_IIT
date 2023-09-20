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
} from "@chakra-ui/react";
// import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";

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
      if(data.data.student_pic){
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
      newData.state = data.data.state
      newData.pinCode = data.data.pinCode
      newData.mobileNo = data.data.mobileNo
      setInfo(newData);

    }
    fetchData();
  }, [])


  const generatePDF = useReactToPrint({
    content: () => PDF.current,
    documentTitle: "User",
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const homepagehandler=()=>{
    navigate('/')
  }


  return (
    <>
      <ChakraProvider>
        <Center>
          <Box  boxShadow={"none"}
            width={["100%", "100%", "100%", "50%"]}
            rounded={"lg"}
            m={"4"}>
            <Center>
              <HStack>
                <VStack>
                

                  <Box ref={PDF}>
                  <Center>
                    <Text m={2} fontWeight={"bold"} color={"orange"}>Your personal Details</Text>
                  </Center>
                    <Center>
                    {pic ? (   <Avatar mr={2}
                        size="md"
                        cursor="pointer"
                        src={pic}
                      ></Avatar>) : (
                  '')}
                
                    </Center>
                    <TableContainer>
                      <Table size='sm' variant='striped' colorScheme='teal' mt={5}>
                        {/* <Thead>
                          <Tr>
                            <Th>Fields</Th>
                            <Th>Details</Th>
                          </Tr>
                        </Thead> */}
                        <Tbody>
                          <Tr>
                            <Td>Application No.</Td>
                            <Td>{info.applicationNo}</Td>

                          </Tr>
                          <Tr>
                            <Td>Course Name</Td>
                            <Td>{info.targetCourse}</Td>

                          </Tr>
                          <Tr>
                            <Td>Study Center</Td>
                            <Td>Raghunathpur,Motihari</Td>

                          </Tr>
                          <Tr>
                            <Td>Medium</Td>
                            <Td>E</Td>

                          </Tr>
                          <Tr>
                            <Td>Test City</Td>
                            <Td>Online</Td>

                          </Tr>
                          <Tr>
                            <Td>Test Date</Td>
                            <Td>13-Aug-2023 11.00 AM</Td>

                          </Tr>
                          <Tr>
                            <Td>Student Name</Td>
                            <Td>{info.studentName}</Td>

                          </Tr>
                          <Tr>
                            <Td>Father's Name</Td>
                            <Td>{info.fatherName}</Td>

                          </Tr>
                          <Tr>
                            <Td>Category</Td>
                            <Td>{info.category}</Td>

                          </Tr>
                          <Tr>
                            <Td>Mobile No.</Td>
                            <Td>{info.mobileNo}</Td>

                          </Tr>
                          <Tr>
                            <Td>City</Td>
                            <Td>{info.city}</Td>

                          </Tr>
                          <Tr>
                            <Td>District</Td>
                            <Td>{info.district}</Td>

                          </Tr>
                          <Tr>
                            <Td>State</Td>
                            <Td>{info.state}</Td>

                          </Tr>
                          <Tr>
                            <Td>PinCode</Td>
                            <Td>{info.pinCode}</Td>

                          </Tr>
                          <Tr>
                            <Td>Application From Free</Td>
                            <Td>500</Td>

                          </Tr>
                        </Tbody>

                      </Table>
                    </TableContainer>
                  </Box>
                  <HStack>
                  <Button onClick={generatePDF} m={5}>Download PDF</Button>
                  <Button onClick={homepagehandler} m={5}>Go to home Page</Button>
                  </HStack>
                </VStack>  
              </HStack>
            </Center>
          </Box>
          {/*  */}
        </Center>
      </ChakraProvider>
    </>
  );
}
