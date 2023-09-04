import { Progress } from '@chakra-ui/react';
import { Box, Input, Center, Divider, HStack, Heading, Text, VStack, FormLabel, Select, FormControl, Button, Checkbox } from '@chakra-ui/react'
import { InputRightElement, InputGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
export default function Personal() {
    const navigate=useNavigate();
    const Submithandler=()=>{
       
       navigate('/application')
    }
    return (
        <>
         <Box>
      <Header></Header>
    </Box>
        <Center>
            <Box boxShadow={'dark-lg'} width={['100%', '60%']} rounded={'lg'} m={'3'}>
                <Center>
                <HStack spacing={2} my={8}  >
            <Box bgColor={'orange'} rounded={'xl'} width={6} height={'auto'} textColor={'white'} >1</Box>
            <Progress value={100} size='sm' ml={0} width={20} colorScheme='orange' rounded={'md'}/>
            <Box bgColor={'orange'} rounded={'xl'} width={6} height={'auto'} textColor={'white'}>2</Box>
            <Progress value={0} size='sm' ml={0} width={20} colorScheme='orange' rounded={'md'} />
            <Box bgColor={'gray.200'} rounded={'xl'} width={6} height={'auto'} textColor={'gray.700'}>3</Box>
            <Progress value={0} size='sm' ml={0} width={20} colorScheme='orange'  rounded={'md'}/>
            <Box bgColor={'gray.200'} rounded={'xl'} width={6} height={'auto'} textColor={'gray.700'}>4</Box>
        </HStack>
                </Center>
                <Divider orientation='horizontal' bgColor={'black'} />
                <Center>
                    <Box>
                        <Heading textStyle='h1' fontWeight={'bold'} fontSize={'lg'} >Personal Details</Heading>
                        <Text textStyle='p' fontFamily={''}  >Following are the details</Text>
                    </Box>
                </Center>
                {/* ------------------------------------------------------------------------------------------------------------------------------- */}
                <Center m={3}>
                    <VStack spacing={3}>
                        <HStack width={'95%'}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Father's Name</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel >Date of Birth</FormLabel>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="datetime-local"
                                    rounded={'full'} boxShadow={'base'}
                                />
                            </FormControl>
                        </HStack>
                        <HStack width={'95%'}>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Select placeholder='Gender' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel >Category</FormLabel>
                                <Select placeholder='Study Center' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel >AADHAR NO. (Optional)</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                            {/* <Button colorScheme='orange' size='lg' rounded={'full'} width={'80%'} marginTop={'4%'}>
                                next
                            </Button> */}
                        </HStack>
                        <HStack width={'95%'} spacing={3}>
                            <FormControl width={'180%'}>
                                <FormLabel>Permanent Address</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                            <FormControl width={'80%'}>
                                <FormLabel>City/Town/Village</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                        </HStack>
                        <HStack width={'95%'}>
                            <FormControl>
                                <FormLabel>Pin Code</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel >Country Id</FormLabel>
                                <Select placeholder='Country Id' color={'gray'} rounded={'full'} boxShadow={'base'}>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel >State</FormLabel>
                                <Select placeholder='State' color={'gray'} rounded={'full'} boxShadow={'base'}>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel >District</FormLabel>
                                <Select placeholder='District' color={'gray'} rounded={'full'} boxShadow={'base'}>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>
                        </HStack>
                        <HStack width={'95%'}>
                            <FormControl>
                                <FormLabel>Mobile No.(Self)</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Mobile No.(Father)</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email (Self)</FormLabel>
                                <Input color={'gray'} rounded={'full'} boxShadow={'base'} />
                            </FormControl>
                        </HStack>
                        <HStack width={'95%'}>
                            <FormControl width={'180%'}>
                                <FormLabel >How did you came to know about AbhyaasIIT</FormLabel>
                                <Select color={'gray'} rounded={'full'} boxShadow={'base'}>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Student Photo</FormLabel>
                                <InputGroup>
                                    <Input color={'gray'} rounded={'full'} boxShadow={'base'}  />
                                    <InputRightElement width={'40%'} marginBottom={'10%'}>
                                        <Button colorScheme='orange' size='lg'  rounded={'full'} h={'100%'} >
                                           Browse
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </HStack>
                        <HStack width={'95%'} marginBottom={8}>
                            <Checkbox colorScheme='orange' defaultChecked marginLeft={0} width={'150%'}>
                                I Agree to receive SMS/Call from AbhyaasIIT
                            </Checkbox>
                            <Button colorScheme='orange' size='lg' rounded={'full'} width={'80%'} marginTop={'2%'} onClick={Submithandler}>
                                next
                            </Button>
                        </HStack>

                    </VStack>
                </Center>
            </Box >
        </Center >
        <Box>
      <Footer></Footer>
    </Box>
        </>

    )
}
