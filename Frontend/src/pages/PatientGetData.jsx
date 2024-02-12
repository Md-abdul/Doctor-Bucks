import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientData } from "../redux/patientdata/action";
import { Center, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr,Text } from "@chakra-ui/react";

export const PatientGetData = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.patientReducer.patientDoc);
  const loading = useSelector((store) => store.patientReducer.isLoading);

  useEffect(() => {
    dispatch(getPatientData);
  }, []);

  return (
    <>
    <Text mt={10} fontSize={"3xl"} >All Patient Data</Text>
    <Center>
      
      {loading ? (
        <Center height="100vh">
          <Spinner size="xl" color="blue.500" mt={-42} thickness="4px" />
        </Center>
      ) : (
        // data.map((el) => (
          <TableContainer w={"90%"} mt={10}>
            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>Sr. No</Th>
                  <Th>Name</Th>
                  <Th style={{ width: "10px" }}>Address</Th>
                  <Th>problem</Th>
                  <Th>doctor name</Th>
                  <Th>age</Th>
                  <Th>gender</Th>
                  <Th>appt Time</Th>
                  <Th>appt Date</Th>
                  <Th>has sugar</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((el,index) => (
                  <Tr key={el._id}>
                  <Td>{index + 1}</Td>
                  <Td>{el.name}</Td>
                  <Td w={30}>{el.Address}</Td>
                  <Td>{el.problem}</Td>
                  <Td>{el.doctorname}</Td>
                  <Td>{el.age}</Td>
                  <Td>{el.gender}</Td>
                  <Td>{el.admitTime}</Td>
                  <Td>{el.admitDate}</Td>
                  <Td>{el.suger ? "Yes" : "No"}</Td>
                </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        // ))
      )}
    </Center>
    </>
  );
};
