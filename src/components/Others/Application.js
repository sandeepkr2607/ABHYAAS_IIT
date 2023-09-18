import { Input, Progress } from "@chakra-ui/react";
import {
  Center,
  Box,
  Divider,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Application() {
  const navigate = useNavigate();
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

  const [pic,setPic]=useState('');


  useEffect(() => {

    async function fetchData() {
      window.scrollTo(0, 0)
      const id = localStorage.getItem("id");
      if (!id) {
        navigate('/form')
        return
      }

      const response = await fetch(`https://dev.seiasecure.com/api/v1/getCoachingApplicationById/${id}`);
      const data = await response.json();
      if (data.success === false) {
        navigate('/form')
        return
      }
      if(data.data.isVerified===false){
        navigate('/otp')
        return
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
      setInfo(newData);

    }
    fetchData();
  }, [])

  const handleFileChange = async(event) => {
    const file = event.target.files[0];
 
    if (file) {
      // Implement your logic to handle the selected file here
      const id = localStorage.getItem("id");
      if (!id) {
        navigate('/form')
        return
      }
      const data=new FormData();
      data.append('file',file);
    //   const response=await fetch(`https://dev.seiasecure.com/api/v1/upload_image/${id}`,{ //last image/upload is addded by us with the API base URL
    //   method:'post',
    //   body:data
    // })

      setPic(file)
      console.log('Selected file:', file);
    }
  };
  const Submithandler = () => {
    navigate("/success");
  };
  return (
    <>
      <ChakraProvider>
        <Box>
          <Header></Header>
        </Box>
        <Center>
          <Box
            boxShadow={"base"}
            width={["100%", "100%", "100%", "75%"]}
            rounded={"lg"}
            m={"3"}>
            <Center>
              <HStack spacing={2} my={8}>
                <Box
                  bgColor={"orange"}
                  rounded={"xl"}
                  width={6}
                  height={"auto"}
                  textColor={"white"}>
                  1
                </Box>
                <Progress
                  value={100}
                  size="sm"
                  ml={0}
                  width={20}
                  colorScheme="orange"
                  rounded={"md"}
                />
                <Box
                  bgColor={"orange"}
                  rounded={"xl"}
                  width={6}
                  height={"auto"}
                  textColor={"white"}>
                  2
                </Box>
                <Progress
                  value={100}
                  size="sm"
                  ml={0}
                  width={20}
                  colorScheme="orange"
                  rounded={"md"}
                />
                <Box
                  bgColor={"orange"}
                  rounded={"xl"}
                  width={6}
                  height={"auto"}
                  textColor={"white"}>
                  3
                </Box>
                <Progress
                  value={0}
                  size="sm"
                  ml={0}
                  width={20}
                  colorScheme="orange"
                  rounded={"md"}
                />
                <Box
                  bgColor={"gray.200"}
                  rounded={"xl"}
                  width={6}
                  height={"auto"}
                  textColor={"gray.700"}>
                  4
                </Box>
              </HStack>
            </Center>
            <Divider orientation="horizontal" bgColor={"black"} />
            <Center>
              <Box m={3}>
                <Heading textStyle="h1" fontWeight={"bold"} fontSize={"lg"} m={3}>
                  Personal Details
                </Heading>
                <Text textStyle="p" fontFamily={""}>
                  Following are the details
                </Text>
              </Box>
            </Center>
            <HStack spacing={10}>
              <Box boxShadow={"base"} rounded={"2xl"} m={"3"} width={"60%"}>
                <HStack px={50} spacing={20} py={10}>
                  <VStack spacing={2} alignItems={"start"}>
                    <Text fontWeight={"bold"}>Application No.</Text>
                    <Text fontWeight={"bold"}>Course Name</Text>
                    <Text fontWeight={"bold"}>Division</Text>
                    <Text fontWeight={"bold"}>Study Center</Text>
                    <Text fontWeight={"bold"}>Medium</Text>
                    <Text fontWeight={"bold"}>Test City</Text>
                    <Text fontWeight={"bold"}>Test Date</Text>
                    <Text fontWeight={"bold"}>Student Name</Text>
                    <Text fontWeight={"bold"}>Father's Name</Text>
                    <Text fontWeight={"bold"}>Category</Text>
                    <Text fontWeight={"bold"}>City</Text>
                    <Text fontWeight={"bold"}>District</Text>
                    <Text fontWeight={"bold"}>State</Text>
                    <Text fontWeight={"bold"}>PinCode</Text>
                    <Text fontWeight={"bold"}>Application From Free</Text>
                  </VStack>
                  <VStack spacing={2} alignItems={"start"}>
                    {/* <Text>2300922</Text>
                    <Text>iAKHIL</Text>
                    <Text>JEE(Main)</Text>
                    <Text>Mumbai - Churchgate</Text>
                    <Text>E</Text>
                    <Text>Online</Text>
                    <Text>13-Aug-2023 11.00 AM</Text>
                    <Text>SHRUTHI</Text>
                    <Text>SELVAKUMAR</Text>
                    <Text>sc</Text>
                    <Text>Bangalore</Text>
                    <Text>Bijapur</Text>
                    <Text>Karnataka</Text>
                    <Text>560049</Text>
                    <Text>500</Text> */}
                    <Text>{info.applicationNo}</Text>
                    <Text>{info.targetCourse}</Text>
                    <Text>JEE(Main)</Text>
                    <Text>Mumbai - Churchgate</Text>
                    <Text>E</Text>
                    <Text>Online</Text>
                    <Text>13-Aug-2023 11.00 AM</Text>
                    <Text>{info.studentName}</Text>
                    <Text>{info.fatherName}</Text>
                    <Text>{info.category}</Text>
                    <Text>{info.city}</Text>
                    <Text>{info.district}</Text>
                    <Text>{info.state}</Text>
                    <Text>{info.pinCode}</Text>
                    <Text>500</Text>
                  </VStack>
                </HStack>
              </Box>
              <VStack m={10}>
                <Box
                  boxShadow={"base"}
                  rounded={"2xl"}
                  m={"3"}
                  p={10}
                  bgColor={"orange.100"}
                  overflow={"hidden"}>
                    

              
                  {!pic?( <VStack spacing={0} p={0} mb={25}>
                    <Text fontWeight={"bold"}>Kindly Browse</Text>
                    <Text fontWeight={"bold"}>Your resent</Text>
                    <Text fontWeight={"bold"}>Passport size</Text>
                    <Text fontWeight={"bold"}>color</Text>
                    <Text fontWeight={"bold"}>Photograph</Text>
                  </VStack>):(
                  <VStack spacing={0} p={0} mb={25}>
                  <Avatar mr={2}
                size="2xl"
                cursor="pointer"
                    
                src={pic}
                
                ></Avatar>
                </VStack>)}
                  {/* <VStack spacing={0} p={0} mb={25}>
                    <Text fontWeight={"bold"}>Kindly Browse</Text>
                    <Text fontWeight={"bold"}>Your resent</Text>
                    <Text fontWeight={"bold"}>Passport size</Text>
                    <Text fontWeight={"bold"}>color</Text>
                    <Text fontWeight={"bold"}>Photograph</Text>
                  </VStack> */}
                  {/* <Input
                    type="file"
                    accept="image/*"
                    // ref={fileInputRef}
                    style={{
                      position: 'absolute',
                      width: '1px',
                      height: '1px',
                      padding: '0',
                      margin: '-1px',
                      overflow: 'hidden',
                      clip: 'rect(0, 0, 0, 0)',
                      border: '0',
                    }}
                    // onChange={handleFileChange}
                    id="file-input" // Add an id for the label's htmlFor
                  />
                      <label htmlFor="file-input">
                  <Button colorScheme="orange" size="lg" rounded={"full"} m={2}>
                    Browse
                  </Button>
                  </label> */}
                  <label htmlFor="files" class="btn">Browse</label> 
                  <Input id="files"  accept='image/*'  style={{ display:'none' }} width={0} type="file" onChange={handleFileChange}/>
                  

                </Box>













                <Button
                  colorScheme="orange"
                  size="lg"
                  rounded={"full"}
                  width={"80%"}
                  marginTop={"2%"}
                  onClick={Submithandler}>
                  next
                </Button>
              </VStack>
            </HStack>
          </Box>
        </Center>
        <Box>
          <Footer></Footer>
        </Box>
      </ChakraProvider>
    </>
  );
}
