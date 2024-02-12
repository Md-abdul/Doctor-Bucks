import React from "react";
import { Box, Heading, Text, Flex, Icon, Button, Link } from "@chakra-ui/react";
import { MdBook, MdPeople } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {

  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      //   height="100vh"
      //   bg="#f7f7f7"
      //   border={"1px solid"}
    >
      <Heading as="h1" size="2xl" mb={6} mt={20}>
        Welcome to Our Health Clinic
      </Heading>

      <Flex justify="center" align="center">
        <Box
          p={8}
          m={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          textAlign="center"
        >
          <Icon as={MdBook} boxSize={8} color="teal.500" />
          <Heading as="h2" size="xl" mt={4}>
            Book Your Appointment
          </Heading>
          <Text mt={2} color="gray.600">
            Schedule your appointment for a convenient time.
          </Text>
          <Button colorScheme="teal" mt={4} onClick={() => navigate("/patientappointment")}>
            Book Now
          </Button>
        </Box>

        <Box
          p={8}
          m={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          textAlign="center"
        >
          <Icon as={MdPeople} boxSize={8} color="blue.500" />
          <Heading as="h2" size="xl" mt={4}>
            Meet Our Top Doctors
          </Heading>
          <Text mt={2} color="gray.600">
            Explore our team of experienced doctors.
          </Text>
          {/* Add a link or button to navigate to the doctors section */}
          <Button colorScheme="blue" mt={4} onClick={() => navigate("/viewdoctor")}>
            View Doctors
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BookAppointment;
