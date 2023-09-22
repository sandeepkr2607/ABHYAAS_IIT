import React, { useState, useEffect } from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
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


import { useToast } from "@chakra-ui/react";

const Target_courses = [
  { value: "", text: "Select Course" },
  { value: "Brain Gym", text: "Brain Gym" },
  { value: "Foundation Course", text: "Foundation Course" },
  { value: "JEE Mains/Advance", text: "JEE Mains/Advance" },
  { value: "Maths + Programme", text: "Maths+ Programme" }
  // { value: "Entrance Test Batch-1", text: "Entrance Test Batch-1" }
];

const BrainGym_Target = ["6th", "7th"];
const FoundationCourse_Target = ["8th", "9th", "10th"];
const JEE_Target = ["11th", "12th"];
const Maths_Target = ["6th", "7th", "8th", "10th", "11th", "12th"];
const FreeCrash_Target = ["8th", "9th", "10th", "12th"];
// const Entrance_Target = ["6th", "7th", "8th", "9th", "10th", "11th"];

export default function Form() {
  const [academic_session, setAcademic_session] = useState("");
  const [target_course, setTarget_course] = useState("");
  const [target_class, setTarget_class] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({
    academic_session: "",
    target_course: "",
    target_class: "",
    name: "",
    mobile: "",
    Checkbox: "",
  });

  const toast = useToast();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setErrors({
      ...errors,
      Checkbox: "",
    });
  };

  const sessionChangeHandler = (event) => {
    setAcademic_session(event.target.value);
    if (event.target.value === "2023-24") {
      setTarget_course("Free Crash Course");
    }
    // setTarget_class("")
    // setTarget_course("")
    setErrors({
      ...errors,
      academic_session: "",
    });
  };

  const CourseChangeHandler = (event) => {
    setTarget_course(event.target.value);
    console.log(event.target.value);
    setErrors({
      ...errors,
      target_course: "",
    });
  };

  const classChangeHandler = (event) => {
    setTarget_class(event.target.value);
    setErrors({
      ...errors,
      target_class: "",
    });
  };

  const mobileChangeHandler = (event) => {
    const regex = /^[0-9]{10}$/;
    setMobile(event.target.value);
    if (regex.test(event.target.value) === false) {
      setErrors({
        ...errors,
        mobile: "Enter Valid Mobile Number",
      });
    } else {
      setErrors({
        ...errors,
        mobile: "",
      });
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    setErrors({
      ...errors,
      name: "",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const Submithandler = async () => {
    const regex = /^[0-9]{10}$/;
    const newErrors = {};
    if (academic_session === "") {
      newErrors.academic_session = "Please enter a session";
    }
    if (target_course === "") {
      newErrors.target_course = "Please enter a course";
    }
    if (target_class === "") {
      newErrors.target_class = "Please enter a class";
    }
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (regex.test(mobile) === false) {
      newErrors.mobile = "Enter Valid Mobile Number";
    }
    if (isChecked === false) {
      newErrors.Checkbox = "Please tick the checkbox";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch(
        "https://dev.seiasecure.com/api/v1/coaching_application",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            academicSession: academic_session,
            studyMode: "Offline",
            targetCourse: target_course,
            targetClass: target_class,
            studyCenter: "RaghunathPur,Motihari",
            studentName: name,
            mobileNo: mobile,
            agreeToReceiveSMS: isChecked,
          }),
        }
      );
      const data = await response.json();
      if (data.message === "Mobile number is already registered") {
        toast({
          title: "Already Resgistered",
          description: "This mobile number is allready registered",
          position: "top",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      localStorage.clear();
      localStorage.setItem("id", data.data._id);
      console.log(data);
      // if (data.otp) {
      //   navigate("/otp");
      // }
      navigate('/personal')
    }
  };
  const selectedCourses = (course) => {
    if (course === "") return "";
    if (course === "Brain Gym") {
      return BrainGym_Target.map((e) => {
        return (
          <option key={e} value={e}>
            {e}
          </option>
        );
      });
    }
    if (course === "Foundation Course") {
      return FoundationCourse_Target.map((e) => {
        return (
          <option key={e} value={e}>
            {e}
          </option>
        );
      });
    }
    if (course === "JEE Mains/Advance") {
      return JEE_Target.map((e) => {
        return (
          <option key={e} value={e}>
            {e}
          </option>
        );
      });
    }
    if (course === "Maths + Programme") {
      return Maths_Target.map((e) => {
        return (
          <option key={e} value={e}>
            {e}
          </option>
        );
      });
    }
    // if (course === "Entrance Test Batch-1") {
    //   return Entrance_Target.map((e) => {
    //     return (
    //       <option key={e} value={e}>
    //         {e}
    //       </option>
    //     );
    //   });
    // }
    if (course === "Free Crash Course") {
      return FreeCrash_Target.map((e) => {
        return (
          <option key={e} value={e}>
            {e}
          </option>
        );
      });
    }
  };
  return (
    <>
      <ChakraProvider>
        <Box width={"100%"}>
          <Box>
            <Header></Header>
          </Box>
          <Center>
            <Box
              boxShadow={"base"}
              width={["100%", "80%"]}
              height={["100%", "auto"]}
              rounded={"lg"}
              mx={2}
              marginTop={3}
              marginBottom={[0, 10]}
            >
              {/* Progress bar */}
              {/* <Center>
                <HStack spacing={2} my={8}>
                  <Box
                    bgColor={"orange"}
                    rounded={"xl"}
                    width={6}
                    height={"auto"}
                    textColor={"white"}
                  >
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
                    textColor={"gray.700"}
                  >
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
                    textColor={"gray.700"}
                  >
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
                    textColor={"gray.700"}
                  >
                    4
                  </Box>
                </HStack>
              </Center> */}

<Center>
      <HStack spacing={2} my={8}>
        <Box
          bgColor={"orange"}
          rounded={"xl"}
          width={{ base: 6, md: 6 }}
          height={"auto"}
          textColor={"white"}
        >
          1
        </Box>
        <Progress
          value={50}
          size="sm"
          ml={0}
          width={{ base: 12, md: 20 }}
          colorScheme="orange"
          rounded={"md"}
        />

        {/* Step 2 */}
        <Box
          bgColor={"gray.200"}
          rounded={"xl"}
          width={{ base: 6, md: 6 }}
          height={"auto"}
          textColor={"gray.700"}
        >
          2
        </Box>
        <Progress
          value={0}
          size="sm"
          ml={0}
          width={{ base: 12, md: 20 }}
          colorScheme="orange"
          rounded={"md"}
        />   

        {/* Step 3 */}
        <Box
          bgColor={"gray.200"}
          rounded={"xl"}
          width={{ base: 6, md: 6 }}
          height={"auto"}
          textColor={"gray.700"}
        >
          3
        </Box>
        <Progress
          value={0}
          size="sm"
          ml={0}
          width={{ base: 12, md: 20 }}
          colorScheme="orange"
          rounded={"md"}
        />

        {/* Step 4 */}
        <Box
          bgColor={"gray.200"}
          rounded={"xl"}
          width={{ base: 6, md: 6 }}
          height={"auto"}
          textColor={"gray.700"}
        >
          4
        </Box>
      </HStack>
    </Center>

              {/* Progress bar */}
              <Divider orientation="horizontal" bgColor={"black"} />
              <Center>
                <Box m={3}>
                  <Heading
                    textStyle="h1"
                    fontWeight={"bold"}
                    fontSize={"lg"}
                    m={3}
                  >
                    Course Details
                  </Heading>
                  <Text textStyle="p" fontFamily={""}>
                    Following are the details
                  </Text>
                </Box>
              </Center>
              {/* Main form component */}
              {/* <Center m={3}>
       
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
                 
                    </Select>     
                  </FormControl>
                  <FormControl isInvalid={errors.target_course}  height="2rem">   
                    <FormLabel>Target Course</FormLabel>
                    <Select
           
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"200px"}
                      value={target_course}
                      onChange={CourseChangeHandler}
                     
                      >
                    
                      {academic_session===''?<option value=''> Select Course </option>:academic_session==='2023-24'?
                      (<option value='Free Crash Course' selected>Free Crash Course </option>)

                        :Target_courses.map((e)=>
                        <option key={e.value} value={e.value}>{e.text}</option>
                      )}

                     
                    
                    </Select>
                    {errors.target_course && academic_session!== '2023-24' ? (<FormErrorMessage >{errors.target_course}</FormErrorMessage>) :''}
                  </FormControl>
                  <FormControl isInvalid={errors.target_class}   height="2rem">
                    <FormLabel>Target Class</FormLabel>
                    <Select
                    
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
           
                  <FormControl  height="2rem">
                    <FormLabel>Study Center</FormLabel>
                    <Select
                  
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      >
                      <option>Raghunathpur,Motihari</option>
           
                    </Select>
                  </FormControl>
              
                  <FormControl isInvalid={errors.name}  height="2rem" >
                    <FormLabel>Student's Name</FormLabel>
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
   
              </VStack>
            </Center> */}
              {/* Main form component */}

              {/* Checkbox */}
              {/* <Flex direction={"column"}  marginLeft={'208px'} left={0} marginTop={10} marginBottom={8}>
                <Checkbox
                  colorScheme="orange"
                  
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
                </Flex> */}
              {/* Checkbox */}
              {/* New styles */}

              <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                justify={{ lg: "space-between" }}
                gap={{ base: "62px" }}
                p={{ base: 2, lg: 50 }}
              >
                <FormControl isInvalid={errors.academic_session} height="2rem">
                  <FormLabel>Academic Session</FormLabel>
                  <Select
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

                  {errors.academic_session ? (
                    <FormErrorMessage>
                      {errors.academic_session}
                    </FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
                <FormControl height="2rem">
                  <FormLabel>Study Mode</FormLabel>
                  <Select
                    placeholder="Offline Mode"
                    color={"black"}
                    rounded={"full"}
                    boxShadow={"base"}
                    width={"100%"}
                    disabled
                  ></Select>
                </FormControl>
                <FormControl isInvalid={errors.target_course} height="2rem">
                  <FormLabel>Target Course</FormLabel>
                  <Select
                    color={"gray"}
                    rounded={"full"}
                    boxShadow={"base"}
                    // width={"200px"}
                    width={"100%"}
                    value={target_course}
                    onChange={CourseChangeHandler}
                  >
                    {academic_session === '' ? (
                      <option value=""> Select Course </option>
                    ) : academic_session === "2023-24" ? (
                      <option value="Free Crash Course" selected>
                        Free Crash Course{" "}
                      </option>
                    ) : (
                      Target_courses.map((e) => (
                        <option key={e.value} value={e.value}>
                          {e.text}
                        </option>
                      ))
                    )}
                  </Select>
                  {errors.target_course && academic_session !== "2023-24" ? (
                    <FormErrorMessage>{errors.target_course}</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
                <FormControl isInvalid={errors.target_class} height="2rem">
                  <FormLabel>Target Class</FormLabel>
                  <Select
                    color={"gray"}
                    rounded={"full"}
                    boxShadow={"base"}
                    width={"100%"}
                    onChange={classChangeHandler}
                    value={target_class}
                  >
                    {/* {academic_session===''} */}
                    <option value="">Select Class</option>
                    {selectedCourses(target_course)}
                  </Select>
                  {errors.target_class ? (
                    <FormErrorMessage>{errors.target_class}</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
              </Flex>
              <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                justify={{ lg: "space-between" }}
                gap={{ base: "62px" }}
                p={{ base: 2, lg: 50 }}
                flexGrow={3}
                mt={{ base: "50px", lg: 6 }}
              >
                <FormControl height="2rem">
                  <FormLabel>Study Center</FormLabel>
                  <Select rounded={"full"} boxShadow={"base"} width={"100%"}>
                    <option>Raghunathpur,Motihari</option>
                  </Select>
                </FormControl>
                <FormControl isInvalid={errors.name} height="2rem">
                  <FormLabel>Student's Name</FormLabel>
                  <Input
                    placeholder="Student name"
                    color={"gray"}
                    rounded={"full"}
                    boxShadow={"base"}
                    width={"100%"}
                    onChange={nameChangeHandler}
                  />
                  {errors.name ? (
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
                <FormControl isInvalid={errors.mobile} height="2rem">
                  <FormLabel>Mobile No.</FormLabel>
                  <Input
                    placeholder="Mobile No."
                    color={"gray"}
                    rounded={"full"}
                    boxShadow={"base"}
                    width={"100%"}
                    onChange={mobileChangeHandler}
                  />
                  {errors.mobile ? (
                    <FormErrorMessage>{errors.mobile}</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
                <Button
                  colorScheme="orange"
                  size="lg"
                  rounded={"full"}
                  width={["100%", "80%"]}
                  marginTop={"2%"}
                  onClick={Submithandler}
                >
                  next
                </Button>
              </Flex>

              <Flex
                direction={"column"}
                marginLeft={[2,12]}
                left={0}
                marginTop={8}
                marginBottom={8}
                alignItems={{ base: "flex-start", lg: "flex-start" }}
              >
                <Checkbox
                  colorScheme="orange"
                  isInvalid={errors.Checkbox}
                  isChecked={isChecked}
                  width={"100%"}
                  onChange={handleCheckboxChange}
                >
                  I Agree to receive SMS/Call from AbhyaasIIT
                </Checkbox>
                <Flex>
                  {errors.Checkbox ? (
                    <Text color={"red"} padding={0} margin={0}>
                      {errors.Checkbox}
                    </Text>
                  ) : (
                    ""
                  )}
                </Flex>
              </Flex>
            </Box>
          </Center>
          <Box>
            <Footer></Footer>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
