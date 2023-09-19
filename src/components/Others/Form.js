
import React, { useState,useEffect } from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react"
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
// import { Text } from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";


const Target_courses = [{value:'',text:'Select Course'},{value:'Brain Gym',text:'Brain Gym'},{value:'Foundation Course',text:'Foundation Course'} ,
{value:'JEE Mains/Advance',text:'JEE Mains/Advance'},{value:'Maths + Programme',text:'Maths+ Programme'} ,
 {value: 'Entrance Test Batch-1',text: 'Entrance Test Batch-1'}
]
const BrainGym_Target=['6th','7th'];
const FoundationCourse_Target=['8th','9th','10th'];
const JEE_Target=['11th','12th']
const Maths_Target=['6th','7th','8th','10th','11th','12th']
const FreeCrash_Target=['8th','9th','10th','12th']
const Entrance_Target=['6th','7th','8th','9th','10th','11th']









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
  mobile:'',
  Checkbox:''
});

const toast=useToast();
const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
  setErrors({
    ...errors,
    Checkbox:''
  })
};



const sessionChangeHandler=(event)=>{
    setAcademic_session(event.target.value);
    if(event.target.value==='2023-24'){
      setTarget_course('Free Crash Course')
    }
    setErrors({
      ...errors,
      academic_session:''
    })
}



const CourseChangeHandler=(event)=>{
  setTarget_course(event.target.value);
  console.log(event.target.value)
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
  const regex = /^[0-9]{10}$/;
  setMobile(event.target.value);
  if (regex.test(event.target.value) === false) {
    setErrors({
      ...errors,
      mobile:'Enter Valid Mobile Number'
    })
   
  }
  else{
    setErrors({
      ...errors,
      mobile:''
    })
  }
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
    if(isChecked===false){
      newErrors.Checkbox='Please tick the checkbox';
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
      if(data.result.message==="Mobile number is already registered"){
        toast({
          title: 'Already Resgistered',
          description: "This mobile number is allready registered",
          position:'top',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        return;
      }




      localStorage.setItem("id",data.result.data._id)
      console.log(data)
      // const otpResponse=await fetch("https://dev.seiasecure.com/api/v1/send_otp",{
      //   method:'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //  },
      //  body:JSON.stringify({"mobileNo":mobile})
      // })
      // const otpdata=await otpResponse.json();
      // // console.log(otpdata.otp.mobileNo)
      // // localStorage.setItem("mobile",otpdata.otp.mobileNo)
      // console.log(otpdata)
      if(data.otp){

        navigate("/otp");
      }
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
    if(course==='Maths + Programme'){
      return Maths_Target.map((e)=>{return <option key={e} value={e}>{e}</option>})
    }
    if(course==='Entrance Test Batch-1'){
        return Entrance_Target.map((e)=>{return <option key={e} value={e}>{e}</option>})
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
         
                <HStack spacing="50px">
                  <FormControl isInvalid={errors.academic_session}  height="2rem">
                    <FormLabel >Academic Session</FormLabel>
                    <Select
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={sessionChangeHandler}
                     
                      >
                      <option value='' >Academic Session</option>
                      <option value="2023-24">2023-2024</option>
                      <option value="2024-25" >2024-2025</option>
                    </Select>
                    {/* <Select
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      // onChange={genderChangeHandler}
                      >
                         <option value="not want to disclose">Not want to disclose</option>
                      <option value=''>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                     
                    </Select> */}
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
                      width={"200px"}
                      value={target_course}
                      onChange={CourseChangeHandler}
                     
                      >
                      {/* {academic_session==='Academic Session'?<option value=''>Target Course</option>:''} */}
                      {academic_session===''?<option value=''> Select Course </option>:academic_session==='2023-24'?
                      (<option value='Free Crash Course' selected>Free Crash Course </option>)

                        :Target_courses.map((e)=>
                        <option key={e.value} value={e.value}>{e.text}</option>
                      )}

                      {/* <option value=''>Target Course</option>
                      {Target_courses.map((e)=>
                        <option key={e.value} value={e.value}>{e.text}</option>
                      )} */}
                      {/* {Target_courses.map((e)=>
                        <option key={e.value} value={e.value}>{e.text}</option>
                      )} */}
                    </Select>
                    {errors.target_course && academic_session!== '2023-24' ? (<FormErrorMessage >{errors.target_course}</FormErrorMessage>) :''}
                  </FormControl>
                  <FormControl isInvalid={errors.target_class}   height="2rem">
                    <FormLabel>Target Class</FormLabel>
                    <Select
                      // placeholder="Target Class"
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={classChangeHandler} >
                     <option value=''>Select Class</option>
                     {selectedCourses(target_course)}
                    </Select>
                    {errors.target_class ? (<FormErrorMessage >{errors.target_class}</FormErrorMessage>) : ''}
                  </FormControl>
                </HStack>
                <HStack spacing="26px">
                  {/* <Box> */}
                  <FormControl  height="2rem">
                    <FormLabel>Study Center</FormLabel>
                    <Select
                      // placeholder="RaghunathPur,Motihari"
                      // color={"orange.900"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      >
                      <option>Raghunathpur,Motihari</option>
                      {/* <option>United Arab Emirates</option>
                      <option>Nigeria</option> */}
                    </Select>
                  </FormControl>
                  {/* </Box> */}
                  <FormControl isInvalid={errors.name}  height="2rem" >
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
                {/* <Box  marginLeft={0} left={0}>
                <Checkbox
                  colorScheme="orange"
                  // marginLeft={0}
                  // marginBottom={5}
                  isInvalid={errors.Checkbox}
                  isChecked={isChecked}
                  width={"100%"}
                  onChange={handleCheckboxChange}
                  >
                  I Agree to receive SMS/Call from AbhyaasIIT
                </Checkbox>
                {errors.Checkbox ? (<Text color={'red'}>{errors.Checkbox}</Text>) : ''}
                </Box> */}
              </VStack>
            </Center>

            <Flex direction={"column"}  marginLeft={'208px'} left={0} marginTop={10} marginBottom={8}>
                <Checkbox
                  colorScheme="orange"
                  // marginLeft={0}
                  // marginBottom={5}
                  isInvalid={errors.Checkbox}
                  isChecked={isChecked}
                  width={"100%"}
                  onChange={handleCheckboxChange}
                  >
                  I Agree to receive SMS/Call from AbhyaasIIT
                </Checkbox>
                <Flex>
                {errors.Checkbox ? (<Text color={'red'} padding={0} margin={0}>{errors.Checkbox}</Text>) : ''}
                </Flex>
                </Flex>




          </Box>
        </Center>
        <Box>
          <Footer></Footer>
        </Box>
      </ChakraProvider>
    </>
  );
}
