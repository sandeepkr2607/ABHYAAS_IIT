import {
  Input,
  Progress,
  Table,
  TableContainer,
  Tr,
  Td,
  Toast,
  Tbody,
} from '@chakra-ui/react';
import {
  Center,
  Box,
  Divider,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';
// import { FormControl, FormLabel } from "@chakra-ui/react";
import { useRef } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export default function Application() {
  const navigate = useNavigate();
  const [fetchAgain, setFetchAgain] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const [info, setInfo] = useState({
    applicationNo: '',
    targetCourse: '',
    studentName: '',
    fatherName: '',
    category: '',
    city: '',
    class: '',
    district: '',
    state: '',
    pinCode: '',
    school: '',
  });

  const [pic, setPic] = useState('');

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      const id = localStorage.getItem('id');
      if (!id) {
        navigate('/form');
        return;
      }
      // const picture=localStorage.getItem("pic");
      // if(!picture){
      //   setPic('');
      // }else{
      //   setPic(picture)
      // }

      const response = await fetch(
        `https://api.abhyaasiit.com/api/v1/getCoachingApplicationById/${id}`
      );
      const data = await response.json();

      console.log(data);

      if (data.success === false) {
        navigate('/form');
        return;
      }

      // if(data.data.isVerified===false){
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
      newData.class = data.data.targetClass;
      newData.district = data.data.district;
      newData.state = data.data.state;
      newData.pinCode = data.data.pinCode;
      newData.school = data.data.school;
      setInfo(newData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const id = localStorage.getItem('id');
      if (!id) {
        navigate('/form');
        return;
      }

      const response = await fetch(
        `https://api.abhyaasiit.com/api/v1/getCoachingApplicationById/${id}`
      );
      const data = await response.json();
      if (data.success === false) {
        navigate('/form');
        return;
      }

      if (data.data.student_pic) {
        setPic(data.data.student_pic);
        console.log('running');
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchAgain]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const maxSizeInBytes = 200 * 1024;
    if (file) {
      if (file.size > maxSizeInBytes) {
        toast({
          title: 'Image greater than 200kb',
          description: 'Image should be less than 200kb',
          position: 'top',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      setLoading(true);
      // Implement your logic to handle the selected file here
      const id = localStorage.getItem('id');
      if (!id) {
        navigate('/form');
        return;
      }
      const data = new FormData();
      data.append('file', file);
      const response = await fetch(
        `https://api.abhyaasiit.com/api/v1/upload_image/${id}`,
        {
          //last image/upload is addded by us with the API base URL
          method: 'post',
          body: data,
        }
      );
      const datas = await response.json();
      console.log(datas);
      // localStorage.setItem("pic",datas.profilePicImageUrl.student_pic)
      console.log(datas.profilePicImageUrl.student_pic);

      // if(datas.profilePicImageUrl.student_pic){
      //   setFetchAgain(!fetchAgain);
      // }
      if (datas.message === 'Image uploaded successfully') {
        setFetchAgain(!fetchAgain);
      }
    }
  };
  //error if server not response
  const Submithandler = async () => {
    const id = localStorage.getItem('id');
    if (!pic) {
      toast({
        title: 'Please upload a image',
        description: 'Image is not uploaded',
        position: 'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    const responseS = await fetch(
      `https://api.abhyaasiit.com/api/v1/send_confirmation_sms/${id}`,
      {
        method: 'POST',
      }
    );
    const responseE = await fetch(
      `https://api.abhyaasiit.com/api/v1/send_confirmation_email/${id}`,
      {
        method: 'POST',
      }
    );
    const data = await responseS.json();
    const Email = await responseE.json();

    if (data.success === true || Email.success === true) {
      navigate('/new-payment');
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
            boxShadow={'base'}
            width={['100%', '100%', '100%', '60%']}
            rounded={'lg'}
            m={'3'}
          >
            <Center>
              <HStack spacing={2} my={8}>
                <Box
                  bgColor={'orange'}
                  rounded={'xl'}
                  width={{ base: 6, md: 6 }}
                  height={'auto'}
                  textColor={'white'}
                >
                  1
                </Box>
                <Progress
                  value={100}
                  size='sm'
                  ml={0}
                  width={{ base: 12, md: 20 }}
                  colorScheme='orange'
                  rounded={'md'}
                />
                {/* Step 2 */}
                <Box
                  bgColor={'orange'}
                  rounded={'xl'}
                  width={{ base: 6, md: 6 }}
                  height={'auto'}
                  textColor={'white'}
                >
                  2
                </Box>
                <Progress
                  value={100}
                  size='sm'
                  ml={0}
                  width={{ base: 12, md: 20 }}
                  colorScheme='orange'
                  rounded={'md'}
                />
                {/* Step 3 */}
                <Box
                  bgColor={'orange'}
                  rounded={'xl'}
                  width={{ base: 6, md: 6 }}
                  height={'auto'}
                  textColor={'white'}
                >
                  3
                </Box>
                <Progress
                  value={50}
                  size='sm'
                  ml={0}
                  width={{ base: 12, md: 20 }}
                  colorScheme='orange'
                  rounded={'md'}
                />
                {/* Step 4 */}
                <Box
                  bgColor={'gray.200'}
                  rounded={'xl'}
                  width={{ base: 6, md: 6 }}
                  height={'auto'}
                  textColor={'gray.700'}
                >
                  4
                </Box>
              </HStack>
            </Center>
            <Divider orientation='horizontal' bgColor={'black'} />
            <Center>
              <Box m={3}>
                <Heading
                  textStyle='h1'
                  fontWeight={'bold'}
                  fontSize={'lg'}
                  m={3}
                >
                  Personal Details
                </Heading>
                <Text textStyle='p' fontFamily={''}>
                  Following are the details
                </Text>
              </Box>
            </Center>
            <VStack spacing={5} align='center'>
              <HStack
                spacing={5}
                w='100%'
                justify={{ base: 'center', lg: 'space-between' }} // Adjust alignment based on screen size
                flexDirection={{ base: 'column', lg: 'row' }} // Stack vertically on small screens, side by side on large screens
              >
                <Box
                  // boxShadow="base"
                  rounded='2xl'
                  m={3}
                  w='100%' // Full width on small screens
                  maxW={{ base: '90%', lg: '45%' }} // Responsive width
                >
                  <TableContainer>
                    <Table variant={'simple'} style={{ marginTop: '0' }}>
                      <Tbody>
                        <Tr>
                          <Td p={1}>Application No.</Td>
                          <Td p={1}>{info.applicationNo}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Course Name</Td>
                          <Td p={1}>{info.targetCourse}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Class</Td>
                          <Td p={1}>{info.class}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>School</Td>
                          <Td p={1}>{info.school}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Study Center</Td>
                          <Td p={1}>Raghunathpur & Raja Bazar,Motihari</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Medium</Td>
                          <Td p={1}>E</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Test City</Td>
                          <Td p={1}>Raghunathpur & Raja Bazar,Motihari</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Test Date</Td>
                          <Td p={1}>13-Aug-2023 11.00 AM</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Student Name</Td>
                          <Td p={1}>{info.studentName}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Father's Name</Td>
                          <Td p={1}>{info.fatherName}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Category</Td>
                          <Td p={1}>{info.category}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>City</Td>
                          <Td p={1}>{info.city}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>District</Td>
                          <Td p={1}>{info.district}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>State</Td>
                          <Td p={1}>{info.state}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>PinCode</Td>
                          <Td p={1}>{info.pinCode}</Td>
                        </Tr>
                        <Tr>
                          <Td p={1}>Application From Free</Td>
                          <Td p={1}>500</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box
                  boxShadow='base'
                  rounded='2xl'
                  m={3}
                  p={10}
                  bgColor='orange.100'
                  overflow='hidden'
                  height={'30%'}
                  flex={{ base: 'none', lg: 'none' }} // Adjust flex based on screen size
                  width={{
                    base: '80%',
                    sm: '45%',
                    md: '35%',
                    lg: '40%',
                    xl: '35%',
                    '2xl': '30%',
                  }} // Responsive width
                >
                  {!pic && !loading ? (
                    <VStack spacing={0} p={0} mb={25}>
                      <Text fontWeight='bold'>Kindly Browse</Text>
                      <Text fontWeight='bold'>Your recent</Text>
                      <Text fontWeight='bold'>Passport size</Text>
                      <Text fontWeight='bold'>color</Text>
                      <Text fontWeight='bold'>Photograph</Text>
                    </VStack>
                  ) : loading ? (
                    <Box height={'100%'} p={'47px'}>
                      {' '}
                      <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='orange'
                        size='xl'
                      ></Spinner>
                    </Box>
                  ) : (
                    <Avatar
                      mr={2}
                      size='2xl'
                      cursor='pointer'
                      src={pic}
                      mb={5}
                    />
                  )}
                  <label htmlFor='files' className='btn'>
                    Browse
                  </label>
                  <Input
                    id='files'
                    accept='image/*'
                    style={{ display: 'none' }}
                    width={0}
                    type='file'
                    onChange={handleFileChange}
                  />
                </Box>
              </HStack>
              <Button
                colorScheme='orange'
                size='lg'
                rounded='full'
                w={['80%', '30%']}
                mt={2}
                mb={2}
                onClick={Submithandler}
              >
                Next
              </Button>
            </VStack>
          </Box>
        </Center>
        <Box>
          <Footer></Footer>
        </Box>
      </ChakraProvider>
    </>
  );
}
