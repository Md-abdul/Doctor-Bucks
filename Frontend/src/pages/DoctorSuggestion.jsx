import React from "react";
import { Box, Heading, Text, Flex, Image , Divider} from "@chakra-ui/react";

const DoctorSuggestion = () => {
  const imageSize = "250px"; // Increase the size to your preference

  return (
    <Flex direction="column" align="center" justify="center" mt={20}>
      <Heading as="h1" size="2xl" mb={20} mt={30}>
        Some Health Suggestions
      </Heading>

      {/* Section 1 */}

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-around"
        m={4}
        bg="white"
        // boxShadow="md"
        borderRadius="md"
        textAlign="left"
        gap={"-200px"}
      >
        <Box
          w={{ base: "100%", md: "25%" }}
          //   border={"1px solid"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft={"190px"}
        >
          {/* Image */}
          <Image
            src="https://img.freepik.com/premium-photo/medical-concept-asian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-624.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=ais" // Replace with the actual image URL
            alt="Doctor"
            borderRadius="full"
            h={["200px", "300px"]} // Responsive height
          />
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          textAlign="left"
          //   border={"1px solid"}
          p={4}
          marginRight={"130px"}
        >
          {/* Text */}
          <Heading as="h2" size="xl" mb={4}>
          Expert Advice on Health
          </Heading>
          <Divider borderWidth="2px" mb={4} borderColor="red.500" />
          <Text color="gray.600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            similique incidunt repellat illum nobis. Nulla iusto maiores autem
            eligendi ab exercitationem beatae eaque atque, maxime labore,
            molestias laboriosam libero aspernatur.illum nobis. Nulla iusto
            maiores autem eligendi ab exercitationem beatae eaque atque, maxime
            labore, molestias laboriosam libero aspernatur.
          </Text>
        </Box>
      </Flex>

      {/* Section 2 */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-around"
        m={4}
        bg="white"
        // boxShadow="md"
        borderRadius="md"
        textAlign="left"
        gap={"-200px"}
      >
        <Box
          w={{ base: "100%", md: "40%" }}
          textAlign="left"
          //   border={"1px solid"}
          p={4}
          marginLeft={"130px"}
        >
          {/* Text */}
          <Heading as="h2" size="xl" mb={4}>
            Health Tips from Our Doctors
          </Heading>
          <Divider borderWidth="2px" mb={4} borderColor="red.500" />
          <Text color="gray.600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            similique incidunt repellat illum nobis. Nulla iusto maiores autem
            eligendi ab exercitationem beatae eaque atque, maxime labore,
            molestias laboriosam libero aspernatur.illum nobis. Nulla iusto
            maiores autem eligendi ab exercitationem beatae eaque atque, maxime
            labore, molestias laboriosam libero aspernatur.
          </Text>
        </Box>
        <Box
          w={{ base: "100%", md: "25%" }}
          //   border={"1px solid"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight={"190px"}
        >
          {/* Image */}
          <Image
            src="https://img.freepik.com/premium-photo/medical-concept-asian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-624.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=ais" // Replace with the actual image URL
            alt="Doctor"
            borderRadius="full"
            h={["200px", "300px"]} // Responsive height
          />
        </Box>
      </Flex>

      {/* Section 3 */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-around"
        m={4}
        bg="white"
        // boxShadow="md"
        borderRadius="md"
        textAlign="left"
        gap={"-200px"}
      >
        <Box
          w={{ base: "100%", md: "25%" }}
          //   border={"1px solid"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft={"190px"}
        >
          {/* Image */}
          <Image
            src="https://img.freepik.com/premium-photo/medical-concept-asian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-624.jpg?size=626&ext=jpg&ga=GA1.1.369674836.1695031680&semt=ais" // Replace with the actual image URL
            alt="Doctor"
            borderRadius="full"
            h={["200px", "300px"]} // Responsive height
          />
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          textAlign="left"
          //   border={"1px solid"}
          p={4}
          marginRight={"130px"}
        >
          {/* Text */}
          <Heading as="h2" size="xl" mb={4}>
          Wellness Tips for a Healthy Life
          </Heading>
          <Divider borderWidth="2px" mb={4} borderColor="red.500" />
          <Text color="gray.600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            similique incidunt repellat illum nobis. Nulla iusto maiores autem
            eligendi ab exercitationem beatae eaque atque, maxime labore,
            molestias laboriosam libero aspernatur.illum nobis. Nulla iusto
            maiores autem eligendi ab exercitationem beatae eaque atque, maxime
            labore, molestias laboriosam libero aspernatur.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DoctorSuggestion;
