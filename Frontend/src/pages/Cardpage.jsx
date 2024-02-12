import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteData, getData } from "../redux/postdata/action";

export const Cardpage = ({
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
  // const handelDeletebtn = (id) => {
  //   dispatch(deleteData(id))
  //   .then((res) => {
  //     dispatch(getData())
  //   })
  // }
  const handelDeletebtn = async (id) => {
    try {
      await dispatch(deleteData(id));
      dispatch(getData());
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <Center py={6}>
      <Box
        maxW={"420px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        // gap={-25}
      >
        <Avatar
          size={"2xl"}
          src="https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg?w=2000"
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
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {specialization}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Experience: {experience} years
          <br />
          Location: {location}
          <br />
          Date: {date}
          <br />
          Slots: {slots}
          <br />
          Fee: {fee}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400px"}
          >
            {specialization}
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
         
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "red.500",
              }}
              onClick={() => handelDeletebtn(_id)}
            >
              Delete
            </Button>

          <Link to={`/edit/${_id}`}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Edit
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
};
