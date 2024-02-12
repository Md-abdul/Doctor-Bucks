import {
  Avatar,
  Badge,
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cardpage } from "./Cardpage";
import { ViewDoctorCard } from "./ViewDoctorCard";
import { getData } from "../redux/postdata/action";

export const ViewDoctor = ({
  _id,
  name,
  image,
  specialization,
  experience,
  location,
  date,
  slots,
  fee,
}) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.postReducer.data);
  const loading = useSelector((store) => store.postReducer.isLoading);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <Box flex="1" mt={10}>
      <Text fontSize={'2xl'}>Meet Our Top Doctors</Text>
        {loading ? (
          <Center height="100vh">
            <Spinner size="xl" color="blue.500" mt={-42} thickness="4px" />
          </Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={-50}>
            {data.map((el) => (
            
              <Box
                key={el._id}
                maxW={"420px"}
                w={"full"}
                bg={'gray.10'}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                ml={10}
                mt={5}
                
              >
                
                <Avatar
                  size={"2xl"}
                  src="https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg?w=2000" // Assuming the image property is present in your data
                  mb={4}
                  border="2px solid black"
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: "green.300",
                    border: "2px solid black",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {el.name}
                </Heading>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  {el.specialization}
                </Text>
                <Text textAlign={"center"} px={3}>
                  Experience: {el.experience} years
                  <br />
                  Location: {el.location}
                  <br />
                  Date: {el.date}
                  <br />
                  Slots: {el.slots}
                  <br />
                  Fee: {el.fee}
                </Text>
                <Stack
                  align={"center"}
                  justify={"center"}
                  direction={"row"}
                  mt={6}
                >
                  <Badge px={2} py={1} fontWeight={"400px"}>
                    {el.specialization}
                  </Badge>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
};
