import { Progress } from '@chakra-ui/react';
import { Center, Box, Divider, Heading, Text, HStack, VStack, Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'

export default function Application() {
    const navigate=useNavigate();
  const Submithandler=()=>{
     
     navigate('/success')
  }
    return (
        <>
         <Box>
      <Header></Header>
    </Box>
        <Center>
            <Box boxShadow={'dark-lg'} width={['100%','100%','100%', '75%']} rounded={'lg'} m={'3'}>
                <Center>
                <HStack spacing={2} my={8}  >
            <Box bgColor={'orange'} rounded={'xl'} width={6} height={'auto'} textColor={'white'} >1</Box>
            <Progress value={100} size='sm' ml={0} width={20} colorScheme='orange' rounded={'md'}/>
            <Box bgColor={'orange'} rounded={'xl'} width={6} height={'auto'} textColor={'white'}>2</Box>
            <Progress value={100} size='sm' ml={0} width={20} colorScheme='orange' rounded={'md'} />
            <Box bgColor={'orange'} rounded={'xl'} width={6} height={'auto'} textColor={'white'}>3</Box>
            <Progress value={0} size='sm' ml={0} width={20} colorScheme='orange'  rounded={'md'}/>
            <Box bgColor={'gray.200'} rounded={'xl'} width={6} height={'auto'} textColor={'gray.700'}>4</Box>
        </HStack>
                </Center>
                <Divider orientation='horizontal' bgColor={'black'} />
                <Center>
                    <Box>
                        <Heading textStyle='h1' fontWeight={'bold'} fontSize={'lg'} >Course Details</Heading>
                        <Text textStyle='p' fontFamily={''}  >Following are the details</Text>
                    </Box>
                </Center>
                <HStack spacing={10}>
                    <Box boxShadow={'base'} rounded={'2xl'} m={'3'} width={'60%'}>
                        <HStack px={50} spacing={20} py={10}>
                            <VStack spacing={0} alignItems={'start'}>                             
                                <Text fontWeight={'bold'}>Application No.</Text>                                                                                    
                                 <Text fontWeight={'bold'}>Course Name</Text>                                                                                   
                                <Text fontWeight={'bold'}>Division</Text>                                                       
                                <Text fontWeight={'bold'}>Study Center</Text>                                                                                     
                                <Text fontWeight={'bold'}>Medium</Text>                                                             
                                <Text fontWeight={'bold'}>Test City</Text>                                                           
                                 <Text fontWeight={'bold'}>Test Date</Text>                                                             
                                <Text fontWeight={'bold'}>Student Name</Text>                                                           
                                <Text fontWeight={'bold'}>Father's Name</Text>                           
                               <Text fontWeight={'bold'}>Category</Text>                                
                                <Text fontWeight={'bold'}>City</Text>                        
                                <Text fontWeight={'bold'}>District</Text>
                                <Text fontWeight={'bold'}>State</Text>
                                <Text fontWeight={'bold'}>PinCode</Text>
                                <Text fontWeight={'bold'}>Application From Free</Text>
                            </VStack>
                            <VStack spacing={0} alignItems={'start'}>
                                <Text>2300922</Text>
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
                                <Text>500</Text>
                            </VStack>
                        </HStack>
                    </Box >
                    <VStack m={10}>
                        <Box boxShadow={'base'} rounded={'2xl'} m={'3'} p={10} bgColor={'orange.100'} overflow={'hidden'}>
                            <VStack spacing={0}>
                                <Text fontWeight={'bold'}>Kindly Paste</Text>
                                <Text fontWeight={'bold'}>Your resent</Text>
                                <Text fontWeight={'bold'}>Passport size</Text>
                                <Text fontWeight={'bold'}>color</Text>
                                <Text fontWeight={'bold'}>Photograph</Text>
                            </VStack>
                        <Button colorScheme='orange' size='lg' rounded={'full'} m={2}>
                            Browse
                        </Button>
                        </Box>
                        <Button colorScheme='orange' size='lg' rounded={'full'} width={'80%'} marginTop={'2%'}  onClick={Submithandler}>
                                next
                            </Button>
                    </VStack>

                </HStack>

            </Box>
        </Center>
        <Box>
      <Footer></Footer>
    </Box>
        </>
    )
}
