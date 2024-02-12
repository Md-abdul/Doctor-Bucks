import {
  Box,
  Center,
  Grid,
  GridItem,
  FormControl,
  Text,
  VStack,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPatientData } from "../redux/patientdata/action";

export const PatientAppointment = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, isError } = useSelector((state) => state);


  const [patientData, setpatientData] = useState({
    name: "",
    Address: "",
    problem: "",
    doctorname: "",
    age: 0,
    gender: "",
    admitTime: "",
    admitDate: "",
    suger: "",
  });

  const handelPatient = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle checkbox separately
    if (type === "checkbox") {
      setpatientData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setpatientData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    // 
    // console.log("Submitted data:", patientData);

    if (
      !patientData.name ||
      !patientData.Address ||
      !patientData.age ||
      !patientData.problem ||
      !patientData.admitDate ||
      !patientData.admitTime ||
      !patientData.gender ||
      // !patientData.suger ||
      !patientData.doctorname
    ) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    await dispatch(postPatientData(patientData))

    if(!isError){
      toast({
        title: "Data Posted",
        description: "Data has been successfully posted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setpatientData({
        name: "",
        Address: "",
        problem: "",
        doctorname: "",
        age: 0,
        gender: "",
        admitTime: "",
        admitDate: "",
        suger: "",
      });
    } else {
      toast({
        title: "Error",
        description: "Posting data failed. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Center>
      <Box
        mt={7}
        p={10}
        boxShadow={
          "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
        }
        borderRadius={15}
      >
        <form onSubmit={handelSubmit}>
          <Text fontSize="2xl">Fill All Patient Details 📑</Text>
          <VStack spacing={3} align="start" mt={8}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <GridItem>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={patientData.name}
                    onChange={handelPatient}
                    required
                    placeholder="Patient's Name"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="Address">
                  <FormLabel>Address</FormLabel>
                  <Input
                    placeholder="Patient's Address"
                    type="text"
                    name="Address"
                    value={patientData.Address}
                    onChange={handelPatient}
                    required
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="problem">
                  <FormLabel>Disease(problem)</FormLabel>
                  <Input
                    placeholder="Patient's Disease/Problem"
                    type="text"
                    name="problem"
                    value={patientData.problem}
                    required
                    onChange={handelPatient}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="doctorname">
                  <FormLabel>Doctor Name</FormLabel>
                  <Select
                    placeholder="Select Doctor"
                    type="text"
                    name="doctorname"
                    value={patientData.doctorname}
                    required
                    onChange={handelPatient}
                  >
                    <option>Dr. John Doe</option>
                    <option>Dr. Jane Smith</option>
                    <option>Dr. David Johnson</option>
                    {/* Add more doctors as needed */}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="age">
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    placeholder="Patient's Age"
                    name="age"
                    value={patientData.age}
                    onChange={handelPatient}
                    required
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="gender">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    placeholder="Select Gender"
                    type="text"
                    name="gender"
                    value={patientData.gender}
                    onChange={handelPatient}
                    required
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="admitTime">
                  <FormLabel>Appointment Time</FormLabel>
                  <Input
                    type="time"
                    placeholder="Select Time"
                    name="admitTime"
                    value={patientData.admitTime}
                    onChange={handelPatient}
                    required
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="admitDate">
                  <FormLabel>Appointment Date</FormLabel>
                  <Input
                    type="date"
                    placeholder="Select Date"
                    name="admitDate"
                    value={patientData.admitDate}
                    onChange={handelPatient}
                    required
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="suger">
                  <FormLabel>Has Sugar?</FormLabel>
                  <Checkbox
                    isChecked={patientData.suger}
                    onChange={handelPatient} // Add onChange handler for Checkbox
                    // required
                    name="suger"
                  >
                    Check if the patient has sugar .
                  </Checkbox>
                </FormControl>
              </GridItem>
            </Grid>
            <Button type="Submit" bg={"red.100"}>
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};
