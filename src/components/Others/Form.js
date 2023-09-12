
import React, { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { VStack, HStack } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { FormErrorMessage } from "@chakra-ui/react";
import { useEffect } from "react";

const Target_courses = [{value:'Brain Gym',text:'Brain Gym'},{value:'Foundation Course',text:'Foundation Course'} ,
{value:'JEE Mains/Advance',text:'JEE Mains/Advance'},{value:'Maths+ Programme',text:'Maths+ Programme'} , 
{value:'Free Crash Course',text:'Free Crash Course '}, {value: 'Entrance Test Batch-1',text: 'Entrance Test Batch-1'}
]
const BrainGym_Target=[6,7];
const FoundationCourse_Target=[8,9,10];
const JEE_Target=[11,12]
const Maths_Target=[6,7,8,10,11,12]
const FreeCrash_Target=[8,9,10,12]









export default function Form() {

const [academic_session,setAcademic_session]=useState('');
const [target_course,setTarget_course]=useState('')
const [target_class,setTarget_class]=useState('');
const [name,setName]=useState('');
const [mobile,setMobile]=useState('');
const [errors, setErrors] = useState({
  academic_session: '',
  target_course: '',
  target_class: '',
  name:'',
  mobile:''
});


const [isChecked, setIsChecked] = useState(true);

const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
};



const sessionChangeHandler=(event)=>{
    setAcademic_session(event.target.value);
    setErrors({
      ...errors,
      academic_session:''
    })
}



const CourseChangeHandler=(event)=>{
  setTarget_course(event.target.value);
  setErrors({
    ...errors,
    target_course:''
  })
}

const classChangeHandler=(event)=>{
  setTarget_class(event.target.value)
  setErrors({
    ...errors,
    target_class:''
  })
}

const mobileChangeHandler=(event)=>{
  setMobile(event.target.value);
  setErrors({
    ...errors,
    mobile:''
  })
}

const nameChangeHandler=(event)=>{
  setName(event.target.value);
  setErrors({
    ...errors,
    name:''
  })
}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const Submithandler =async () => {
    const regex = /^[0-9]{10}$/;
    const newErrors = {};
    if(academic_session===''){
      newErrors.academic_session = 'Please enter a session';
    }
    if(target_course===''){
      newErrors.target_course= 'Please enter a course';
    }
    if(target_class===''){
      newErrors.target_class= 'Please enter a class';
    }
    if (name.trim() === '') {
      newErrors.name= 'Name is required';
    }
    if (regex.test(mobile) === false) {
      newErrors.mobile = 'Enter Valid Mobile Number';
    }
    setErrors(newErrors);


    if (Object.keys(newErrors).length === 0){
      const response = await fetch("https://dev.seiasecure.com/api/v1/coaching_application", {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "academicSession":academic_session,"studyMode": "Offline", "targetCourse":target_course ,  
        "targetClass":target_class,"studyCenter":"RaghunathPur,Motihari","studentName":name,"mobileNo":mobile,"agreeToReceiveSMS":isChecked })
      });
      const data=await response.json();
      console.log(data)
      navigate("/otp");
    }
  };

const selectedCourses=(course)=>{
    if(course===" ")return " ";
    if(course==='Brain Gym'){
      return BrainGym_Target.map((e)=>{return <option key={e} value={e}>{e}</option>})
    }
    if(course==='Foundation Course'){
      return FoundationCourse_Target.map((e)=>{return <option key={e} value={e}>{e}</option>})
    }
    if(course==='JEE Mains/Advance'){
      return JEE_Target.map((e)=>{return <option key={e} value={e}>{e}</option>})
    }
    if(course==='Maths+ Programme'){
      return Maths_Target.map((e)=>{return <option key={e} value={e}>{e}</option>})
    }
    if(course==='Free Crash Course'){
      return FreeCrash_Target.map((e)=>{return <option key={e} value={e}>{e}</option>})
    }
}


  return (
    <>
      <ChakraProvider>
        <Box>
          <Header></Header>
        </Box>
        <Center>
          <Box
            boxShadow={"base"}
            width={["100%", "80%"]}
            height={"auto"}
            rounded={"lg"}
            mx={2}
            marginTop={3}
            marginBottom={10}>
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
                  value={50}
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
                  2
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
                  Course Details
                </Heading>
                <Text textStyle="p" fontFamily={""}>
                  Following are the details
                </Text>
              </Box>
            </Center>
            <Center m={3}>
       
              <VStack spacing={20}>
               
                <HStack spacing={12}>
                  <FormControl isInvalid={errors.academic_session}  height="2rem">
                    <FormLabel width={'100%'}>Academic Session</FormLabel>
                    <Select
                      // placeholder="Academic Session"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={sessionChangeHandler}
                      >
                      <option value=''>Academic Session</option>
                      <option value="2023-24">2023-2024</option>
                      <option value="2024-25">2024-2025</option>
                    </Select>
                    {errors.academic_session ? (<FormErrorMessage>{errors.academic_session}</FormErrorMessage>) : ''}
                  </FormControl>
                  <FormControl  height="2rem">
                    <FormLabel>Study Mode</FormLabel>
                    <Select
                      placeholder="Offline Mode"
                      color={"black"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"} disabled>
                      {/* <option>United Arab Emirates</option>
                      <option>Nigeria</option> */}
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={errors.target_course}  height="2rem">
                    <FormLabel>Target Course</FormLabel>
                    <Select
                      // placeholder="Brain Gym"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      value={target_course}
                      onChange={CourseChangeHandler}
                      >
                      <option value=''>Target Course</option>
                      {Target_courses.map((e)=>
                        <option key={e.value} value={e.value}>{e.text}</option>
                      )}
                    </Select>
                    {errors.target_course ? (<FormErrorMessage >{errors.target_course}</FormErrorMessage>) : ''}
                  </FormControl>
                  <FormControl isInvalid={errors.target_class}   height="2rem">
                    <FormLabel>Target Class</FormLabel>
                    <Select
                      // placeholder="Target Class"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={classChangeHandler}
                    
                      >
                     <option value=''>Target Class</option>
                     {selectedCourses(target_course)}
                    </Select>
                    <FormErrorMessage>{errors.target_class && errors.target_class}</FormErrorMessage>
                  </FormControl>
                </HStack>
                <HStack spacing={19}>
                  <FormControl  height="2rem">
                    <FormLabel>Study Center</FormLabel>
                    <Select
                      placeholder="RaghunathPur,Motihari"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      disabled>
                      {/* <option>United Arab Emirates</option>
                      <option>Nigeria</option> */}
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={errors.name}  height="2rem">
                    <FormLabel>Student name</FormLabel>
                    <Input
                      placeholder="Student name"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={nameChangeHandler}
                    />
                    {errors.name ? (<FormErrorMessage>{errors.name}</FormErrorMessage>) : ''}
                  </FormControl>
                  <FormControl isInvalid={errors.mobile}  height="2rem">
                    <FormLabel>Mobile No.</FormLabel>
                    <Input
                      placeholder="Mobile No."
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={mobileChangeHandler}
                    />
                     {errors.mobile ? (<FormErrorMessage>{errors.mobile}</FormErrorMessage>) : ''}
                  </FormControl>
                  <Button
                    colorScheme="orange"
                    size="lg"
                    rounded={"full"}
                    width={"80%"}
                    marginTop={"9.5%"}
                    onClick={Submithandler}
                    >
                    next
                  </Button>
                </HStack>
                <Checkbox
                  colorScheme="orange"
                  defaultChecked
                  marginLeft={0}
                  isChecked={isChecked}
                  width={"100%"}
                  onChange={handleCheckboxChange}
                  >
                  I Agree to receive SMS/Call from AbhyaasIIT
                </Checkbox>
              </VStack>
            </Center>
          </Box>
        </Center>
        <Box>
          <Footer></Footer>
        </Box>
      </ChakraProvider>
    </>
  );
}
