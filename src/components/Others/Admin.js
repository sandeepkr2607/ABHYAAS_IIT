import React from "react";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Table, TableContainer, Tr, Td } from "@chakra-ui/react";
import { Thead, Th, Tbody } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const headers = [
  { label: "Name", key: "name" },
  { label: "Application No", key: "applicationNo" },
  { label: "Academic Session", key: "academicSession" },
  { label: "Course", key: "targetCourse" },
  { label: "Class", key: "targetClass" },
  { label: "Mobile", key: "mobileNo" },
  { label: "Creation Date", key: "creation_Date" },
  { label: "School", key: "school" },
  { label: "Category", key: "category" },
  { label: "Email", key: "email" },
  { label: "State", key: "state" },
  { label: "District", key: "district" },
  { label: "Source", key: "sourceConnection" },
  { label: "Pincode", key: "pincode" },
  { label: "Father Name", key: "fatherName" },
  { label: "Father Mobile", key: "fatherMobileNo" },
  { label: "Date of birth", key: "DOB" },
  { label: "Student Picture", key: "studentPic" },
  { label: "Aadhar", key: "aadhar" },
  { label: "City", key: "city" },
  { label: "Address", key: "Address" },
  { label: "Updated Time", key: "Updated" },
];
export default function Admin() {
  let count = 1;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(() => {
    let info = [];
    async function fetchData() {
      const response = await fetch(
        "https://dev.seiasecure.com/api/v1/getAllCoachingApplications"
      );
      const json = await response.json();
      // console.log(json)
      json.data.forEach((item) => {
        let dateofB='';
        if(item.dateOfBirth){
           dateofB =item.dateOfBirth.replace("T00:00:00.000Z", "");
          }
          // console.log(dateofB);
        let object = {
          id: item._id,
          name: item.studentName,
          academicSession: item.academicSession,
          targetCourse: item.targetCourse,
          targetClass: item.targetClass,
          mobileNo: item.mobileNo,
          school: item.school,
          category: item.category,
          email: item.email,
          fatherMobileNo: item.fatherMobileNo,
          fatherName: item.fatherName,
          state: item.state,
          district: item.district,
          city: item.city,
          pincode: item.pinCode,
          sourceConnection: item.sourceConnection,
          creation_Date: item.createdAt,
          applicationNo: item.applicationNo,
          studentPic: item.student_pic,
          DOB: dateofB,
          aadhar: item.aadharNo,
          Address: item.permanentAddress,
          Updated: item.updatedAt,
        };
        // console.log(object.DOB)
        info.push(object);
      });
      setData(info);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let info = [];
    async function fetchData() {
      const response = await fetch(
        "https://dev.seiasecure.com/api/v1/getAllCoachingApplications"
      );
      const json = await response.json();
      json.data.forEach((item) => {
        let dateofB='';
        if(item.dateOfBirth){
           dateofB =item.dateOfBirth.replace("T00:00:00.000Z", "");
          }
        let object = {
          id: item._id,
          name: item.studentName,
          academicSession: item.academicSession,
          targetCourse: item.targetCourse,
          targetClass: item.targetClass,
          mobileNo: item.mobileNo,
          school: item.school,
          category: item.category,
          email: item.email,
          fatherMobileNo: item.fatherMobileNo,
          fatherName: item.fatherName,
          state: item.state,
          district: item.district,
          city: item.city,
          pincode: item.pinCode,
          sourceConnection: item.sourceConnection,
          creation_Date: item.createdAt,
          applicationNo: item.applicationNo,
          studentPic: item.student_pic,
          DOB: dateofB,
          aadhar: item.aadharNo,
          Address: item.permanentAddress,
          Updated: item.updatedAt,
        };
        info.push(object);
      });
      setData(info);
    }
    fetchData();
  }, [fetchAgain]);

  const onDelete = async (props) => {
    // console.log(props);
    const response = await fetch(
      `https://dev.seiasecure.com/api/v1/delete_aaplication/${props}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data.success === true) {
      setFetchAgain(!fetchAgain);
    }
  };

  const handleClick = (props) => {
    //  console.log(props)
    navigate("/studentdetails", { state: props });
  };

  return (
    <ChakraProvider>
      <CSVLink data={data} filename="StudentData.csv" headers={headers}>
        <Button colorScheme="orange" size="lg" mt={2}>
          DOWNLOAD CSV
        </Button>
      </CSVLink>
      <TableContainer>
        <Table variant="striped" colorScheme="orange">
          <Thead>
            <Tr>
              <Th>Index</Th>
              <Th>Name</Th>
              <Th>Application No</Th>
              <Th>Academic Session</Th>
              <Th>Course</Th>
              <Th>Class</Th>
              <Th>Mobile</Th>
              <Th>School</Th>
              <Th>Category</Th>
              <Th>Email</Th>
              <Th>State</Th>
              <Th>District</Th>
              <Th>Pincode</Th>
              <Th>Father Name</Th>
              <Th>Father Mobile</Th>
              <Th>Date of birth</Th>
              <Th>Student Picture</Th>
              <Th>Aadhar</Th>
              <Th>City</Th>
              <Th>Address</Th>
              <Th>Source</Th>
              <Th>Creation Date</Th>
              <Th>Updated Time</Th>
              <Th>Application Form</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>
                    <Text fontWeight={"bold"}>{count++}</Text>
                  </Td>
                  <Td>{item.name}</Td>
                  <Td>{item.applicationNo}</Td>
                  <Td>{item.academicSession}</Td>
                  <Td>{item.targetCourse}</Td>
                  <Td>{item.targetClass}</Td>
                  <Td>{item.mobileNo}</Td>
                  <Td>{item.school}</Td>
                  <Td>{item.category}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.state}</Td>
                  <Td>{item.district}</Td>
                  <Td>{item.pincode}</Td>
                  <Td>{item.fatherName}</Td>
                  <Td>{item.fatherMobileNo}</Td>
                  <Td>{item.DOB}</Td>
                  <Td>
                    <Link to={item.studentPic}>
                      <Image src={item.studentPic}></Image>
                    </Link>
                  </Td>
                  <Td>{item.aadhar}</Td>
                  <Td>{item.city}</Td>
                  <Td>{item.Address}</Td>
                  <Td>{item.sourceConnection}</Td>
                  <Td>{item.creation_Date}</Td>
                  <Td>{item.Updated}</Td>
                  <Td>
                    <Button onClick={() => handleClick(item.id)}>
                      Download
                    </Button>
                  </Td>
                  <Td>
                    <Button onClick={() => onDelete(item.id)}>Delete</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
}
