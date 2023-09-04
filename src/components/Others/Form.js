import React from 'react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { VStack, HStack } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'




export default function Form() {
  const navigate=useNavigate();
 const Submithandler=()=>{
    
    navigate('/otp')
 }


  return (
    <>
    <Box>
      <Header></Header>
    </Box>
    <Center>
      
      <Box boxShadow={'base'} width={['100%', '60%']} height={'auto'}  rounded={'lg'} mx={2} marginTop={3} marginBottom={10}>
        <Center>
        <HStack spacing={2} my={8}  >
            <Box bgColor={'orange'} rounded={'xl'} width={6} height={'auto'} textColor={'white'} >1</Box>
            <Progress value={50} size='sm' ml={0} width={20} colorScheme='orange' rounded={'md'}/>
            <Box bgColor={'gray.200'} rounded={'xl'} width={6} height={'auto'} textColor={'gray.700'}>2</Box>
            <Progress value={0} size='sm' ml={0} width={20} colorScheme='orange' rounded={'md'} />
            <Box bgColor={'gray.200'} rounded={'xl'} width={6} height={'auto'} textColor={'gray.700'}>3</Box>
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
        <Center m={3}>
          <VStack spacing={35}>
            <HStack>
              <FormControl>
                <FormLabel >Academic Session</FormLabel>
                <Select placeholder='Academic Session' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel >Study Mode</FormLabel>
                <Select placeholder='Study Mode' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel >Target Course</FormLabel>
                <Select placeholder='Target Course' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel >Target Class</FormLabel>
                <Select placeholder='Target Class' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel >Study Center</FormLabel>
                <Select placeholder='Study Center' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Student name</FormLabel>
                <Input placeholder='Student name' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}/>
              </FormControl>
              <FormControl>
                <FormLabel >Mobile No.</FormLabel>
                <Select placeholder='Mobile No' color={'gray'} rounded={'full'} boxShadow={'base'} width={'100%'}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <Button colorScheme='orange' size='lg' rounded={'full'} width={'80%'} marginTop={'4%'} onClick={Submithandler}>
                next
              </Button>
            </HStack>
            <Checkbox colorScheme='orange' defaultChecked marginLeft={0} width={'100%'}>
              I Agree to receive SMS/Call from AbhyaasIIT
            </Checkbox>
            
          </VStack>
        </Center>
      </Box>
    </Center>
    <Box>
      <Footer></Footer>
    </Box>
    </>
  )
}
