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
} from "@chakra-ui/react";
// import { InputRightElement, InputGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { FormErrorMessage } from "@chakra-ui/react";
export default function Personal() {
  const [name,setName]=useState('');
  const [fatherName,setFatherName]=useState('');
  const [date,setDate]=useState('');
  const [gender,setGender]=useState('');
  const [category,setCategory]=useState('');
  const [addhar,setAadhar]=useState('');
  const [mobileS,setMobileS]=useState('');
  const [mobileF,setMobileF]=useState('');
  const [address,setAddress]=useState('');
  const [city,setCity]=useState('');
  const [pincode,setPincode]=useState('');
  const [state,setState]=useState('');
  const [district,setDistrict]=useState('');
  const [email,setEmail]=useState('');
  const [about,setAbout]=useState('');


  const [errors, setErrors] = useState({
    name: '',
    fatherName: '',
    date: '',
    gender:'',
    category:'',
    mobileS:'',
    mobileF:'',
    address:'',
    city:'',
    pincode:'',
    state:'',
    district:'',
    email:'',
    about:''
  });

  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  

  const nameChangeHandler=(event)=>{
    setName(event.target.value)
    setErrors({
      ...errors,
      name:''
    })
  }
  const fathernameChangeHandler=(event)=>{
    setFatherName(event.target.value)
    setErrors({
      ...errors,
      fatherName:''
    })
  }
  const dateChangeHandler=(event)=>{
    setDate(event.target.value)
    setErrors({
      ...errors,
      date:''
    })
  }
  const genderChangeHandler=(event)=>{
    setGender(event.target.value)
    setErrors({
      ...errors,
      gender:''
    })
  }
  const categoryChangeHandler=(event)=>{
    setCategory(event.target.value)
    setErrors({
      ...errors,
      category:''
    })
  }
  const aadharChangeHandler=(event)=>{
    setAadhar(event.target.value)
  }
  const mobileSChangeHandler=(event)=>{
    setMobileS(event.target.value)
    setErrors({
      ...errors,
      mobileS:''
    })
  }
  const mobileFChangeHandler=(event)=>{
      setMobileF(event.target.value)
      setErrors({
        ...errors,
        mobileF:''
      })
  }
  const addressChangeHandler=(event)=>{
    setAddress(event.target.value)
    setErrors({
      ...errors,
      address:''
    })
  }
  const cityChangeHandler=(event)=>{
    setCity(event.target.value)
    setErrors({
      ...errors,
      city:''
    })
  }
  const pincodeChangeHandler=(event)=>{
    setPincode(event.target.value)
    setErrors({
      ...errors,
      pincode:''
    })
  }
  const stateChangeHandler=(event)=>{
    setState(event.target.value)
    setErrors({
      ...errors,
      state:''
    })
  }
  const districtChangeHandler=(event)=>{
    setDistrict(event.target.value)
    setErrors({
      ...errors,
     district:''
    })
  }
  const emailChangeHandler=(event)=>{
      setEmail(event.target.value)
      setErrors({
        ...errors,
        email:''
      })
  }
  const aboutChangeHandler=(event)=>{
      setAbout(event.target.value)
      setErrors({
        ...errors,
        about:''
      })
  }



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const Submithandler =async () => {
    const regex = /^[0-9]{10}$/;
    const newErrors = {};
    if(name.trim()===''){
      newErrors.name= 'Please enter a name';
    }
    if(fatherName.trim()===''){
      newErrors.fatherName= 'Please enter your father name';
    }
    if(date===''){
      newErrors.date= 'Please enter your DOB';
    }
    if(gender===''){
      newErrors.gender= 'Please enter your gender';
    }
    if(category===''){
      newErrors.category= 'Please enter your category';
    }
    if(regex.test(mobileS) === false){
      newErrors.mobileS= 'Please enter a valid mobile number';
    }
    if(regex.test(mobileF) === false){
        newErrors.mobileF='Please enter a valid mobile number'
    }
    if(address.trim()===''){
      newErrors.address= 'Please enter your address';
    }
    if(city.trim()===''){
      newErrors.city= 'Please enter your city';
    }
    if(pincode.trim()===''){
      newErrors.pincode= 'Please enter your Pincode';
    }
    if(state.trim()===''){
      newErrors.state= 'Please enter your state';
    }
    if(district.trim()===''){
      newErrors.district= 'Please enter your district';
    }
    if(email.trim()===''){
      newErrors.email= 'Please enter your email';
    }
    if(about.trim()===''){
      newErrors.about= 'This field is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0){
      //API call
      navigate("/application");
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
              <Box m={5}>
                <Heading textStyle="h1" fontWeight={"bold"} fontSize={"lg"} m={3}>
                  Personal Details
                </Heading>
                <Text textStyle="p" fontFamily={""}>
                  Following are the details
                </Text>
              </Box>
            </Center>
            {/* ------------------------------------------------------------------------------------------------------------------------------- */}
            <Center>
              <VStack spacing={35}>
                <HStack spacing={39}>
                  <FormControl isInvalid={errors.name} 
                  h={0.5} marginBottom={20}
                  >
                    <FormLabel>Name</FormLabel>
                    <Input color={"gray"} rounded={"full"} width={'100%'} boxShadow={"base"} onChange={nameChangeHandler}/>
                    {errors.name?(<FormErrorMessage>{errors.name}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.fatherName} h={0.5} marginBottom={20}>
                    <FormLabel>Father's Name</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} width={'100%'} onChange={fathernameChangeHandler}/>
                    {errors.fatherName?(<FormErrorMessage>{errors.fatherName}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.date} h={0.5} marginBottom={20}>
                    <FormLabel>Date of Birth</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                      rounded={"full"}
                      boxShadow={"base"}
                      width={'100%'}
                      onChange={dateChangeHandler}
                    />
                    {errors.date?(<FormErrorMessage>{errors.date}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl h={0.5} marginBottom={20} isInvalid={errors.gender}>
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
                </HStack>
                <HStack spacing={35}>
                  <FormControl isInvalid={errors.category} h={0.5} marginBottom={20}>
                    <FormLabel>Category</FormLabel>
                    <Select
                      color={"gray"}
                      rounded={"full"}
                      boxShadow={"base"}
                      width={"100%"}
                      onChange={categoryChangeHandler}
                      >
                      <option value=''>Category</option>
                      <option value='general'>General</option>
                      <option value='general-ews'>General-Ews</option>
                      <option value='obc'>others backwords cast</option>
                      <option value='sc'>schedule cast</option>
                      <option value='st'>schedule tribe</option>
                    </Select>
                    {errors.category?(<FormErrorMessage>{errors.category}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.addhar} h={0.5} marginBottom={20}>
                    <FormLabel>AADHAR NO. (Optional)</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={aadharChangeHandler}/>
                    {/* {errors.addhar?(<FormErrorMessage>{errors.addhar}</FormErrorMessage>):''} */}
                  </FormControl>
                    <FormControl isInvalid={errors.mobileS} h={0.5} marginBottom={20}>
                    <FormLabel>Mobile No.</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={mobileSChangeHandler}/>
                    {errors.mobileS?(<FormErrorMessage>{errors.mobileS}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.mobileF} h={0.5} marginBottom={20}>
                    <FormLabel>Parent's Mobile No.</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={mobileFChangeHandler}/>
                    {errors.mobileF?(<FormErrorMessage>{errors.mobileF}</FormErrorMessage>):''}
                  </FormControl>
                </HStack>
                <HStack width={"100%"} spacing={30}>
                  <FormControl width={"180%"} isInvalid={errors.address} h={0.5} marginBottom={20}>
                    <FormLabel>Permanent Address</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={addressChangeHandler}/>
                    {errors.address?(<FormErrorMessage>{errors.address}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl width={"80%"} isInvalid={errors.city} h={0.5} marginBottom={20}>
                    <FormLabel>City/Town/Village</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={cityChangeHandler}/>
                    {errors.city?(<FormErrorMessage>{errors.city}</FormErrorMessage>):''}
                  </FormControl>
                </HStack>
                <HStack width={"100%"} spacing={30}>
                  <FormControl isInvalid={errors.pincode} h={0.5} marginBottom={20}>
                    <FormLabel>Pin Code</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={pincodeChangeHandler}/>
                    {errors.pincode?(<FormErrorMessage>{errors.pincode}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.state} h={0.5} marginBottom={20}>
                    <FormLabel>State</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={stateChangeHandler}/>
                    {errors.state?(<FormErrorMessage>{errors.state}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.district} h={0.5} marginBottom={20}>
                    <FormLabel>District</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={districtChangeHandler}/>
                    {errors.district?(<FormErrorMessage>{errors.district}</FormErrorMessage>):''}
                  </FormControl>
                  <FormControl isInvalid={errors.email} h={0.5} marginBottom={20}>
                    <FormLabel>Email</FormLabel>
                    <Input color={"gray"} rounded={"full"} boxShadow={"base"} onChange={emailChangeHandler}/>
                    {errors.email?(<FormErrorMessage>{errors.email}</FormErrorMessage>):''}
                  </FormControl>
                </HStack>
                <HStack width={"95%"}>
                
                
                </HStack>
                <HStack width={"100%"}>
                  <FormControl width={"180%"} isInvalid={errors.about} h={0.5} marginBottom={20}>
                    <FormLabel>
                      How did you came to know about AbhyaasIIT
                    </FormLabel>
                    <Select color={"gray"} rounded={"full"} boxShadow={"base"} onChange={aboutChangeHandler}>
                      <option value=''>United Arab Emirates</option>
                      <option value=''>Nigeria</option>
                    </Select>
                    {errors.about?(<FormErrorMessage>{errors.about}</FormErrorMessage>):''}
                  </FormControl>
              
                </HStack>
                <HStack width={"100%"} marginBottom={8}>
                  <Checkbox
                    colorScheme="orange"
                    defaultChecked
                    marginLeft={0}
                    width={"150%"}
                    onChange={handleCheckboxChange}
                    >
                    I Agree to receive SMS/Call from AbhyaasIIT
                  </Checkbox>
                  <Button
                    colorScheme="orange"
                    size="lg"
                    rounded={"full"}
                    width={"80%"}
                    marginTop={"2%"}
                    onClick={Submithandler}>
                    next
                  </Button>
                </HStack>
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
