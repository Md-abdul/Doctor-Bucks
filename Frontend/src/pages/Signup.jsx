import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../redux/auth/action";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  Center
} from "@chakra-ui/react";

export const SignupPage = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, isError } = useSelector((state) => state);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch the Signup action with the form data
    await dispatch(Signup(formData));

    if (!isError) {
      // Show success toast notification
      toast({
        title: "Signup Successful",
        description: "You have successfully signed up.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Clear the form after successful signup
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      // Show error toast notification
      toast({
        title: "Signup Error",
        description: "Signup failed. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Center>
    <Box p={9} w={550} border="1px solid #ccc" borderRadius="lg" boxShadow="lg" mt={5}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" isLoading={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>
          {isError && (
            <Box p={2} color="red">
              Signup failed. Please try again.
            </Box>
          )}
        </VStack>
      </form>
    </Box>
    </Center>
  );
};
