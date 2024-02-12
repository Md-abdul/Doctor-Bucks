// Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/postdata/action";
import { Cardpage } from "./Cardpage";
import {
  Center,
  Spinner, //Cardiologist
  Box,
  SimpleGrid,
  Input,
  Select,
  VStack,Button
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Dashboard = () => {
  const nevigate = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((store) => store.postReducer.data);
  const loading = useSelector((store) => store.postReducer.isLoading);
  const [filteredData, setFilteredData] = useState(data);
  const [searchName, setSearchName] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [sortByFee, setSortByFee] = useState("");
  // console.log(data)
  useEffect(() => {
    // Apply filters when data or filter options change
    filterData();
  }, [data, searchName, selectedSpecialization, sortByFee]);

  const filterData = () => {
    let filtered = [...data];

    // Filter by name
    if (searchName) {
      filtered = filtered.filter((el) =>
        el.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    // Filter by specialization
    if (selectedSpecialization) {
      filtered = filtered.filter(
        (el) => el.specialization === selectedSpecialization
      );
    }

    // Sort by fee
    if (sortByFee === "asc") {
      filtered.sort((a, b) => a.fee - b.fee);
    } else if (sortByFee === "desc") {
      filtered.sort((a, b) => b.fee - a.fee);
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    //  Fetch data when filters change
    dispatch(getData());
  }, []);

  return (
    <Box p={4} display="flex">
      {/* Filters Section */}
      <Box pr={4}>
        <VStack align="start" spacing={4}>
          <Input
            type="text"
            name="name"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />

          <Select
            name="specialization"
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            {/* Options... */}
            <option value="">Select Specialization</option>{" "}
            <option value="Cardiologist">Cardiologist</option>{" "}
            <option value="Dermatologist">Dermatologist</option>{" "}
            <option value="Pediatrician">Pediatrician</option>{" "}
            <option value="Psychiatrist">Psychiatrist</option>
          </Select>

          <Select
            name="sortByFee"
            // placeholder="Sort by Fee"
            value={sortByFee}
            onChange={(e) => setSortByFee(e.target.value)}
          >
            {/* Options... */}
            <option value="">Sort by Fee</option>
            <option value="asc">Ascending</option>{" "}
            <option value="desc">Descending</option>
          </Select>

          <Button onClick={() => nevigate("/onboard")}>Add New Doctors</Button>
          <Button colorScheme="teal" size="md" onClick={() => nevigate("/patientgetdata")}>Show All Patients</Button>
        </VStack>
      </Box>

      {/* Data Section */}
      <Box flex="1">
        {loading ? (
          <Center height="100vh">
            <Spinner size="xl" color="blue.500" mt={-42} thickness="4px" />
          </Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            {filteredData.map((el) => (
              <Cardpage key={el.name} {...el} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};
