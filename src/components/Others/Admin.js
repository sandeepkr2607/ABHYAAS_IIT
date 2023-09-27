import React from 'react'
import { useEffect,useState } from 'react'
import { CSVLink } from 'react-csv'
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

const headers=[
  {label:'Name', key:'name'},
  {label:'Application No',key:'applicationNo'},
  {label:'Academic Session', key:'academicSession'},
  {label:'Course', key:'targetCourse'},
  {label:'Class', key:'targetClass'},
  {label:'Mobile', key:'mobileNo'},
  {label:'Creation Date', key:'creation_Date'},
  {label:'School',key:'school'},
  {label:'Category',key:'category'},
  {label:'Email',key:'email'},
  {label:'State',key:'state'},
  {label:'District',key:'district'},
  {label:'Source',key:'sourceConnection'},
  {label:'Pincode',key:'pincode'},
  {label:'Father Name',key:'fatherName'},
  {label:'Father Mobile',key:'fatherMobileNo'},
  {label:'Date of birth',key:'DOB'},
  {label:'Student Picture',key:'studentPic'},
  {label:'Aadhar',key:'aadhar'},
  {label:'City',key:'city'},
  {label:'Address',key:'Address'},
  {label:'Updated Time',key:'Updated'}
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
                school:item.school,
                category:item.category,
                email:item.email,
                fatherMobileNo:item.fatherMobileNo,
                fatherName:item.fatherName,
                state:item.state,
                district:item.district,
                city:item.city,
                pincode:item.pincode,
                sourceConnection:item.sourceConnection,
                creation_Date:item.createdAt,
                applicationNo:item.applicationNo,
                studentPic:item.student_pic,
                DOB:item.dateOfBirth,
                aadhar:item.aadharNo,
                Address:item.permanentAddress,
                Updated:item.updatedAt
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
