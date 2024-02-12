import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../redux/postdata/action";
import {
  Center,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Button,
  useToast,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const Onboard = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, isError } = useSelector((state) => state);

  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    specialization: "",
    experience: 0,
    location: "",
    date: "",
    slots: 0,
    fee: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue =
      name === "experience" || name === "slots" || name === "fee"
        ? parseFloat(value)
        : value;
    setFormData({ ...formData, [name]: numericValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.imageUrl ||
      !formData.specialization ||
      !formData.location ||
      !formData.date
    ) {
      // Display validation error
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Dispatch the postData action with the form data
    await dispatch(postData(formData));

    // Show toast notification based on the response
    if (!isError) {
      toast({
        title: "Data Posted",
        description: "Data has been successfully posted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Clear the form after successful submission
      setFormData({
        name: "",
        imageUrl: "",
        specialization: "",
        experience: 0,
        location: "",
        date: "",
        slots: 0,
        fee: 0,
      });
    } else {
      // Handle error and show error toast if necessary
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
        p={9}
        w={{ base: "80%", md: "70%", lg: "60%" }}
        boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
        mt={25}
        borderRadius={10}
        
      >
        <form onSubmit={handleSubmit}>
          <Text fontSize='3xl' fontWeight='bold' color={"#f5b921"}>Add New Doctors</Text>

          <VStack spacing={3} align="start">
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <GridItem>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    size="lg"
                    required
                    w={{ lg: "400px" }}
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="imageUrl">
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    size="lg"
                    required
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="specialization">
                  <FormLabel>Specialization</FormLabel>
                  <Select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Select Specialization"
                    size="lg"
                    required
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  >
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatrician">Pediatrician</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="experience">
                  <FormLabel>Experience</FormLabel>
                  <Input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    size="lg"
                    required
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="location">
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    size="lg"
                    required
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="date">
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    size="lg"
                    required
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="slots">
                  <FormLabel>Slots</FormLabel>
                  <Input
                    type="number"
                    name="slots"
                    value={formData.slots}
                    onChange={handleChange}
                    size="lg"
                    required
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="fee">
                  <FormLabel>Fee</FormLabel>
                  <Input
                    type="number"
                    name="fee"
                    value={formData.fee}
                    onChange={handleChange}
                    size="lg"
                    required
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                    }
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
              size="lg"
            >
              {isLoading ? "Posting Data..." : "Submit"}
            </Button>
            {isError && (
              <Text color="red">Posting data failed. Please try again.</Text>
            )}
          </VStack>
        </form>
      </Box>
    </Center>
  );
};
