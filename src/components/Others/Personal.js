import { Progress } from "@chakra-ui/react";
import {
  Box,
  Input,
  Center,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
  FormLabel,
  Select,
  FormControl,
  Button,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { useRef } from "react";
// import { InputRightElement, InputGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { FormErrorMessage } from "@chakra-ui/react";
export default function Personal() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [addhar, setAadhar] = useState("");
  const [mobileS, setMobileS] = useState("");
  const [mobileF, setMobileF] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");



  const [errors, setErrors] = useState({
    name: "",
    fatherName: "",
    date: "",
    gender: "",
    category: "",
    addhar: "",
    mobileS: "",
    mobileF: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    district: "",
    email: "",
    about: "",
  });

  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const navigate = useNavigate();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    setErrors({
      ...errors,
      name: "",
    });
  };
  const fathernameChangeHandler = (event) => {
    setFatherName(event.target.value);
    setErrors({
      ...errors,
      fatherName: "",
    });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    setErrors({
      ...errors,
      date: "",
    });
  };
  const genderChangeHandler = (event) => {
    setGender(event.target.value);
    setErrors({
      ...errors,
      gender: "",
    });
  };
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
    setErrors({
      ...errors,
      category: "",
    });
  };
  const aadharChangeHandler = (event) => {
    const regex = /^[0-9]{12}$/;
    setAadhar(event.target.value);
    if (regex.test(event.target.value) === false) {
      setErrors({
        ...errors,
        addhar: "Enter Valid addhar Number",
      });
    } else {
      setErrors({
        ...errors,
        addhar: "",
      });
    }
  };
  const mobileSChangeHandler = (event) => {
    // setMobileS(event.target.value)
    // setErrors({
    //   ...errors,
    //   mobileS:''
    // })
    const regex = /^[0-9]{10}$/;
    setMobileS(event.target.value);
    if (regex.test(event.target.value) === false) {
      setErrors({
        ...errors,
        mobileS: "Enter Valid Mobile Number",
      });
    } else {
      setErrors({
        ...errors,
        mobileS: "",
      });
    }
  };
  const mobileFChangeHandler = (event) => {
    const regex = /^[0-9]{10}$/;
    setMobileF(event.target.value);
    if (regex.test(event.target.value) === false) {
      setErrors({
        ...errors,
        mobileF: "Enter Valid Mobile Number",
      });
    } else {
      setErrors({
        ...errors,
        mobileF: "",
      });
    }
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
    setErrors({
      ...errors,
      address: "",
    });
  };
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
    setErrors({
      ...errors,
      city: "",
    });
  };
  const pincodeChangeHandler = (event) => {
    const regex = /^[0-9]{6}$/;
    setPincode(event.target.value);
    if (regex.test(event.target.value) === false) {
      setErrors({
        ...errors,
        pincode: "Enter Valid pin Number",
      });
    } else {
      setErrors({
        ...errors,
        pincode: "",
      });
    }
  };
  const stateChangeHandler = (event) => {
    setState(event.target.value);
    setErrors({
      ...errors,
      state: "",
    });
  };
  const districtChangeHandler = (event) => {
    setDistrict(event.target.value);
    setErrors({
      ...errors,
      district: "",
    });
  };
  const emailChangeHandler = (event) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setEmail(event.target.value);
    if (emailRegex.test(email) === false) {
      setErrors({
        ...errors,
        email: "Enter Valid Email",
      });
    } else {
      setErrors({
        ...errors,
        email: "",
      });
    }

    
  };



  const handleBlur = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // Check if the input value matches a Google saved email pattern
   
      if (!emailRegex.test(email)) {
        setErrors('Enter Valid Email');
      } else {
        setErrors('');
      }
    
  };






  const aboutChangeHandler = (event) => {
    setAbout(event.target.value);
    setErrors({
      ...errors,
      about: "",
    });
  };

  const id = localStorage.getItem("id");

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      const id = localStorage.getItem("id");
      if (!id) {
        navigate("/form");
        return;
      }
      const response = await fetch(
        `https://dev.seiasecure.com/api/v1/getCoachingApplicationById/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data.success === false) {
        navigate("/form");
        return;
      }
      //backend
      // if (data.data.isVerified === false) {
      //   navigate("/otp");
      //   return;
      // }

      setName(data.data.studentName);
      setMobileS(data.data.mobileNo);
    }

    fetchData();
  }, []);



  const Submithandler = async () => {
    const regex = /^[0-9]{10}$/;
    const pinregex = /^[0-9]{6}$/;

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Enter your name";
    }
    if (fatherName.trim() === "") {
      newErrors.fatherName = "Enter your father name";
    }
    if (date === "") {
      newErrors.date = "Enter your DOB";
    }
    if (gender === "") {
      newErrors.gender = "Enter your gender";
    }
    if (category === "") {
      newErrors.category = "Enter your category";
    }
    if (regex.test(mobileS) === false) {
      newErrors.mobileS = "Enter a valid mobile number";
    }
    if (regex.test(mobileF) === false) {
      newErrors.mobileF = "Enter a valid mobile number";
    }
    if (address.trim() === "") {
      newErrors.address = "Enter your address";
    }
    if (city.trim() === "") {
      newErrors.city = "Enter your city";
    }
    if (pinregex.test(pincode) === false) {
      newErrors.pincode = "Enter a valid Pincode";
    }
    if (state.trim() === "") {
      newErrors.state = "Enter your state";
    }
    if (district.trim() === "") {
      newErrors.district = "Enter your district";
    }
    if (emailRegex.test(email) === false) {
      newErrors.email = "Enter your email";
    }
 
    if (about.trim() === "") {
      newErrors.about = "This field is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      if (!id) {
        navigate("/application");
      }
      const response = await fetch(
        `https://dev.seiasecure.com/api/v1/updateCoachingApplicationById/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentName: name,
            dateOfBirth: date,
            gender: gender,
            mobileNo: mobileS,
            agreeToReceiveSMS: isChecked,
            fatherMobileNo: mobileF,
            permanentAddress: address,
            email: email,
            fatherName: fatherName,
            aadharNo: addhar,
            sourceConnection: about,
            category: category,
            city: city,
            district: district,
            state: state,
            pinCode: pincode,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        navigate("/application");
      }
    }
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
            width={["100%", "80%"]}
            rounded={"lg"}
            m={"3"}
          >
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

            <Divider orientation="horizontal" bgColor={"black"} />
            <Center>
              <Box m={5}>
                <Heading
                  textStyle="h1"
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  m={3}
                >
                  Personal Details
                </Heading>
                <Text textStyle="p" fontFamily={""}>
                  Following are the details
                </Text>
              </Box>
            </Center>

            <Flex
              direction={{ base: "column", lg: "row" }}
              alignItems={{ base: "center", lg: "flex-start" }}
              justify={{ lg: "space-between" }}
              gap={{ base: "62px" }}
              p={{ base: 1, lg: 50 }}
            >
              <FormControl isInvalid={errors.name} height="2rem"
              // marginBottom={20}
              >
                <FormLabel>Name</FormLabel>
                <Input
                  color={"gray"}
                  rounded={"full"}
                  width={"100%"}
                  boxShadow={"base"}
                  value={name}
                  onChange={nameChangeHandler}
                />
                {errors.name ? (
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.fatherName}
                height="2rem"
                // marginBottom={20}
              >
                <FormLabel>Father's Name</FormLabel>
                <Input
                  color={"gray"}
                  rounded={"full"}
                  boxShadow={"base"}
                  width={"100%"}
                  onChange={fathernameChangeHandler}
                />
                {errors.fatherName ? (
                  <FormErrorMessage>{errors.fatherName}</FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isInvalid={errors.date} 
              height="2rem" 
              // marginBottom={20}
              >
                    <FormLabel>Date of Birth</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="date"
                      rounded={"full"}
                      boxShadow={"base"}
                      width={'100%'}
                      onChange={dateChangeHandler}
                    />
                    {errors.date?(<FormErrorMessage>{errors.date}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl
                      height="2rem" 
                  //  marginBottom={20} 
                   isInvalid={errors.gender}>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={genderChangeHandler}
                      >
                      <option value=''>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="not want to disclose">Not want to disclose</option>
                    </Select>
                    {errors.gender?(<FormErrorMessage>{errors.gender}</FormErrorMessage>):''}
                  </FormControl>
            </Flex>
            <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                justify={{ lg: "space-between" }}
                gap={{ base: "62px" }}
                p={{ base: 1, lg: 50 }}
                // flexGrow={3}
                mt={{ base: "70px", lg: 6 }}
              >
                  <FormControl isInvalid={errors.category} height="2rem"
                  // marginBottom={20}
                  >
                    <FormLabel>Category</FormLabel>
                    <Select
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      onChange={categoryChangeHandler}
                      >
                      <option value=''>Category</option>
                      <option value='general'>General</option>
                      <option value='general-ews'>General-Ews</option>
                      <option value='obc'>OBC</option>
                      <option value='sc'>SC</option>
                      <option value='st'>ST</option>
                    </Select>
                    {errors.category?(<FormErrorMessage>{errors.category}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.addhar} height="2rem"
                  // marginBottom={20}
                  >
                    <FormLabel>AADHAR NO. (Optional)</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={aadharChangeHandler} />
                    {errors.addhar?(<FormErrorMessage>{errors.addhar}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.mobileS} height="2rem"
                  // marginBottom={20}
                  >
                    <FormLabel>Mobile No.</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={mobileSChangeHandler} value={mobileS} disabled/>
                  </FormControl>
                  <FormControl isInvalid={errors.mobileF} height="2rem" 
                  // marginBottom={20}
                  >
                    <FormLabel>Parent's Mobile No.</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={mobileFChangeHandler}/>
                    {errors.mobileF?(<FormErrorMessage>{errors.mobileF}</FormErrorMessage>):''}
                  </FormControl>
              </Flex>
              <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                justify={{ lg: "space-between" }}
                gap={{ base: "62px" }}
                p={{ base: 1, lg: 50 }}
                flexGrow={3}
                mt={{ base: "50px", lg: 6 }}
              >
                 <FormControl width={["100%","100%","100%","180%"]} isInvalid={errors.address} height="2rem" 
                //  marginBottom={20}
                 >
                    <FormLabel>Permanent Address</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={addressChangeHandler}/>
                    {errors.address?(<FormErrorMessage>{errors.address}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl width={["100%","100%","100%","80%"]} isInvalid={errors.city} height="2rem" 
                  // marginBottom={20}
                  >
                    <FormLabel>City/Town/Village</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={cityChangeHandler}/>
                    {errors.city?(<FormErrorMessage>{errors.city}</FormErrorMessage>):''}
                  </FormControl>
              </Flex>
              <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                justify={{ lg: "space-between" }}
                gap={{ base: "62px" }}
                p={{ base: 1, lg: 50 }}
                flexGrow={3}
                mt={{ base: "50px", lg: 6 }}
              >
               <FormControl isInvalid={errors.pincode} height="2rem"
              //  marginBottom={20}
               >
                    <FormLabel>Pin Code</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={pincodeChangeHandler}/>
                    {errors.pincode?(<FormErrorMessage>{errors.pincode}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.state} height="2rem"
                  // marginBottom={20}
                  >
                    <FormLabel>State</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={stateChangeHandler}/>
                    {errors.state?(<FormErrorMessage>{errors.state}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.district} height="2rem"
                  // marginBottom={20}
                  >
                    <FormLabel>District</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={districtChangeHandler}/>
                    {errors.district?(<FormErrorMessage>{errors.district}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.email} height="2rem"
                  // marginBottom={20}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={emailChangeHandler} 
                    onBlur={handleBlur}
                    />
                    {errors.email?(<FormErrorMessage>{errors.email}</FormErrorMessage>):''}
                  </FormControl>
                  </Flex>
                  <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                justify={{ lg: "space-between" }}
                gap={{ base: "62px" }}
                p={{ base: 1, lg: 50 }}
                flexGrow={3}
                mt={{ base: "50px", lg: 6 }}
              >    
                  <FormControl width={["100%","100%","100%","180%"]} isInvalid={errors.about} height="2rem"
                  marginBottom={"80px"}
                  >
                    <FormLabel>
                      How did you came to know about AbhyaasIIT
                    </FormLabel>
                    <Select color={"gray"} rounded={"full"} boxShadow={"base"} onChange={aboutChangeHandler}>
                      <option value=''>How do you know about AbhyaasIIT</option>
                      <option value='From a friend'>From a friend</option>
                      <option value='Form Social Media Add'>Form Social Media</option>
                      <option value='From news papers'>From news papers</option>
                      <option value='From websites'>From websites</option>
                      <option value='From schools'>From schools</option>
                    </Select>
                    {errors.about?(<FormErrorMessage>{errors.about}</FormErrorMessage>):''}
                  </FormControl>
              
              </Flex>
              <Flex
              direction={{ base: "column", lg: "row" }}
              alignItems={{ base: "center", lg: "flex-start" }}
              justify={{ lg: "space-between" }}
              gap={{ base: "62px" }}
              p={{ base: 1, lg: 50 }}
            >
                 <Checkbox
                    colorScheme="orange"
                    defaultChecked
                    marginLeft={0}
                    width={["100%","100%","100%","150%"]}
                    onChange={handleCheckboxChange}
                    marginTop={{base:'10px'}}
                    disabled
                    >
                    I Agree to receive SMS/Call from AbhyaasIIT
                  </Checkbox>
                  <Button
                    colorScheme="orange"
                    size="lg"
                    rounded={"full"}
                    width={"80%"}
                    marginTop={0}
                    marginBottom={0}
                    onClick={Submithandler}>
                    next
                  </Button>
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
