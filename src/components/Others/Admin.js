import React from 'react'
import { useEffect,useState } from 'react'
import { CSVLink } from 'react-csv'
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

const headers=[
  {label:'Name', key:'name'},
  {label:'Academic Session', key:'academicSession'},
  {label:'Course', key:'targetCourse'},
  {label:'Class', key:'targetClass'},
  {label:'Mobile', key:'mobileNo'},
  {label:'Creation Date', key:'creation_Date'},
]
export default function Admin() {
const [data,setData]=useState([]);
useEffect(()=>{
  let info=[];
 async function fetchData(){
        const response=await fetch('https://dev.seiasecure.com/api/v1/getAllCoachingApplications')
        const json=await response.json();
        json.data.forEach((item)=>{
              let object={
                name:item.studentName,
                academicSession:item.academicSession,
                targetCourse:item.targetCourse,
                targetClass:item.targetClass,
                mobileNo:item.mobileNo,
                creation_Date:item.createdAt
              }
              info.push(object)
        });
        setData(info)
        
 }
 fetchData();
},[])




  return (
    <ChakraProvider>
   <CSVLink data={data} filename='StudentData.csv' headers={headers}>
     <Button colorScheme='orange' size='lg' mt={10}>
    Button
  </Button>
 </CSVLink>
 </ChakraProvider>
  )
}
