import {
  Box,
  Button,
  Input,
  Center,
  VStack,
  Heading,
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editData } from "../redux/postdata/action";

const initialState = {
  imageUrl: "",
  name: "",
  specialization: "",
  experience: "",
  location: "",
  date: "",
  slots: "",
  fee: "",
};

export const Edit = () => {
  const updoc = useSelector((store) => store.postReducer.data);
  const { id } = useParams();
  const [doctors, setDoctors] = useState(initialState);
  const dispatch = useDispatch();
  const toast = useToast();

  const handelUpdate = (e) => {
    const { name, value } = e.target;
    setDoctors({ ...doctors, [name]: name === "fee" ? +value : value });
  };

  const handelUpdatebtn = () => {
    dispatch(editData(id, doctors));
    toast({
      title: "Data Updated",
      description: "The data has been successfully updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    const updateDatadoc = updoc.find((el) => el._id === id);
    setDoctors(updateDatadoc);
  }, [updoc, id]);

  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Box p={6} maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg">
          <Heading mb={4}>Edit Data</Heading>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={doctors.name}
            name="name"
            onChange={handelUpdate}
            mb={2}
            required
            
          />
          <FormLabel>Specialization</FormLabel>
          <Input
            type="text"
            value={doctors.specialization}
            name="specialization"
            onChange={handelUpdate}
            mb={2}
            required
          />
          <FormLabel>Experience</FormLabel>
          <Input
            type="text"
            value={doctors.experience}
            name="experience"
            onChange={handelUpdate}
            mb={2}
            required
          />
          <FormLabel>Location</FormLabel>
          <Input
            type="text"
            value={doctors.location}
            name="location"
            onChange={handelUpdate}
            mb={2}
            required
          />
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            value={doctors.date}
            name="date"
            onChange={handelUpdate}
            mb={2}
            required
          />
          <FormLabel>Slots</FormLabel>
          <Input
            type="number"
            value={doctors.slots}
            name="slots"
            onChange={handelUpdate}
            mb={2}
            required
          />
          <FormLabel>Fee</FormLabel>
          <Input
            type="number"
            onChange={handelUpdate}
            value={doctors.fee}
            name="fee"
            mb={4}
            required
          />
          <Button onClick={handelUpdatebtn} colorScheme="teal">
            Update Data
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};
