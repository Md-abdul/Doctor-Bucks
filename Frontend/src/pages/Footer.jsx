import {
    Box,
    Stack,
    HStack,
    VStack,
    Link,
    Divider,
    Image,
    Text,
    Button,
  } from "@chakra-ui/react";
  import { FaGithub } from "react-icons/fa";
  import { BsDiscord } from "react-icons/bs";
  
  export const Footer = () => {
    return (
      <Box p={{ base: 5, md: 8 }} bg="gray.300" mt={10}>
        <Stack
          spacing={{ base: 8, md: 0 }}
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "start" }}
          justify="space-between"
          maxW="5xl"
          marginInline="auto"
          width="100%" // Set width to 100%
        >
          <Box maxW="300px">
            <Link href="https://templateskart.com" isExternal>
              <Image
                w="100px"
                src="/assets/images/layouts/hero_image.png"
                alt="TemplatesKart"
              />
            </Link>
            <Text mt={2} color="gray.500" fontSize="md">
              Build fully functional accessible web applications faster than ever
            </Text>
          </Box>
  
          <HStack spacing={4} d={{ base: "none", sm: "flex" }}>
            <VStack align="flex-start">
              <Text fontSize="md" fontWeight="bold">
                About
              </Text>
              <VStack spacing={2} color="gray.500">
                <CustomLink>Contribute</CustomLink>
                <CustomLink>Media assets</CustomLink>
                <CustomLink>Changelog</CustomLink>
                <CustomLink>Releases</CustomLink>
              </VStack>
            </VStack>
  
            <VStack align="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Community
              </Text>
              <VStack spacing={2} color="gray.500">
                <CustomLink>Chat on Discord</CustomLink>
                <CustomLink>Follow on Twitter</CustomLink>
                <CustomLink>Follow on Github</CustomLink>
                <CustomLink>Github discussions</CustomLink>
              </VStack>
            </VStack>
  
            <VStack align="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Project
              </Text>
              <VStack spacing={2} color="gray.500">
                <CustomLink>TemplatesKart</CustomLink>
                <CustomLink>Documentation</CustomLink>
                <CustomLink>Github organization</CustomLink>
                <CustomLink>npm organization</CustomLink>
              </VStack>
            </VStack>
          </HStack>
        </Stack>
  
        <Divider my={4} />
  
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          justify="space-between"
          maxW="6xl"
          marginInline="auto"
          width="100%" // Set width to 100%
        >
          <Text fontSize="md">
            Built by{" "}
            <Link
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)'
            }}
            //   href="https://github.com/MA-Ahmad"
            //   _hover={{ textDecoration: "underline" }}
              isExternal
            >
              Md Abdul Qadir 🧡🧡
            </Link>
          </Text>
          <HStack spacing={2}>
            <Button
              leftIcon={<FaGithub />}
              as={Link}
              href="#"
              rounded="md"
              colorScheme="gray"
            >
              Github Discussions
            </Button>
            <Button
              leftIcon={<BsDiscord />}
              as={Link}
              href="#"
              rounded="md"
              color="white"
              bg="purple.500"
              _hover={{ bg: "purple.600" }}
            >
              Discord community
            </Button>
          </HStack>
        </Stack>
      </Box>
    );
  };
  
  const CustomLink = ({ children, ...props }) => {
    return (
      <Link
        href="#"
        fontSize="sm"
        _hover={{ textDecoration: "underline" }}
        {...props}
      >
        {children}
      </Link>
    );
  };
  
  export default Footer;
  