// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { LoginRouter } from "../redux/auth/action";
// import { Navigate, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Center,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   useToast,Text
// } from "@chakra-ui/react";

// export const LoginPage = () => {
//   const dispatch = useDispatch();
//   const toast = useToast();
//   const { isLoading, isError, isAuth } = useSelector(
//     (state) => state.authReduer
//   ); // Access isLoading and isError from Redux state
//   const navigate = useNavigate();

//   // Redirect to the home page on successful login
//   useEffect(() => {
//     if (isAuth) {
//       toast({
//         title: "Success",
//         description: "Login successful!",
//         status: "success",
//         position: "top",
//         duration: 4000,
//         isClosable: false,
//       });
//       navigate("/");
//     }
//   }, [isAuth, navigate, toast]);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await dispatch(LoginRouter(formData));

//       if (response.error) {
//         // Display the error message from the backend
//         toast({
//           title: "Login Error",
//           description: response.error,
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//         });
//       } else if (response.token && response.refreshToken) {
//         // Successful login
//         // Set isAuthenticated in Redux state or handle user authentication as needed
//         toast({
//           title: "Login Successful",
//           description: "You have successfully logged in.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//         });
//       } else if (response.error === "Login failed, wrong password") {
//         // Incorrect password
//         toast({
//           title: "Login Error",
//           description:
//             "Incorrect password. Please check your password and try again.",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//         });
//       }
//     } catch (error) {
//       // Handle other errors, e.g., network issues or server errors
//       // toast({
//       //   title: "Error",
//       //   description: "An error occurred while processing your request.",
//       //   status: "error",
//       //   duration: 5000,
//       //   isClosable: true,
//       // });
//     }
//   };

//   return (

//     <>

//     <Box
//     p={9}
//     w={500}
//     // border="1px solid #ccc"
//     borderRadius="lg"
//     // boxShadow="lg"
//     mt={5}

//     mx="auto" // Center the box horizontally
//     display="flex" // Use Flexbox
//     justifyContent="center" // Center the box horizontally
//     alignItems="center" // Center the box vertically
//     // height="100vh" // Make the box take the full height of the viewport
//     >

//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4} align="start" w={"430px"}>
//           <FormControl id="email">
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </FormControl>
//           <FormControl id="password">
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="blue" isLoading={isLoading}>
//             {isLoading ? "Logging In..." : "Log In"}
//           </Button>
//           {isError && (
//             <Box p={2} color="red">
//               {isError === "User not found"
//                 ? "User not found. Please check your email and try again."
//                 : isError === "Incorrect password"
//                 ? "Incorrect password. Please check your password and try again."
//                 : "Login failed. Please try again later."}
//             </Box>
//           )}
//         </VStack>
//       </form>
//     </Box>
//     </>
//   );
// };

// ============================================

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginRouter } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, isError, isAuth } = useSelector(
    (state) => state.authReduer
  ); // Access isLoading and isError from Redux state
  const navigate = useNavigate();

  // Redirect to the home page on successful login
  useEffect(() => {
    if (isAuth) {
      toast({
        title: "Success",
        description: "Login successful!",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: false,
      });
      navigate("/");
    }
  }, [isAuth, navigate, toast]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(LoginRouter(formData));

      if (response.error) {
        // Display the error message from the backend
        toast({
          title: "Login Error",
          description: response.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (response.token && response.refreshToken) {
        // Successful login
        // Set isAuthenticated in Redux state or handle user authentication as needed
        toast({
          title: "Login Successful",
          description: "You have successfully logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else if (response.error === "Login failed, wrong password") {
        // Incorrect password
        toast({
          title: "Login Error",
          description:
            "Incorrect password. Please check your password and try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle other errors, e.g., network issues or server errors
      // toast({
      //   title: "Error",
      //   description: "An error occurred while processing your request.",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      // });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      mt={-10}
    >
      <Box
        p={9}
        width="100%"
        borderRadius="lg"
        // boxShadow="lg"
        mt={"-5px"}
        mx="auto"
        display="flex"
        justifyContent={"space-evenly"}
      >
        <Box width="40%">
          <Image
            src="https://img.freepik.com/premium-photo/woman-lab-coat-with-stethoscope-her-neck-smiles-camera_926968-45.jpg?size=626&ext=jpg&ga=GA1.1.1736508269.1707747700&semt=sph"
            alt="Login Image"
          />
        </Box>
        <Box width="40%" mt={"120px"} boxShadow={"2xl"} p={10} h={"90%"} borderRadius={10}>
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            Login Page
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="start">
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
              <Button type="submit" colorScheme="blue" isLoading={isLoading}>
                {isLoading ? "Logging In..." : "Log In"}
              </Button>
              <Link navigate="/signup" >Let's Signup If you have not account ?</Link>
              {isError && (
                <Box p={2} color="red">
                  {isError === "User not found"
                    ? "User not found. Please check your email and try again."
                    : isError === "Incorrect password"
                    ? "Incorrect password. Please check your password and try again."
                    : "Login failed. Please try again later."}
                </Box>
              )}
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
