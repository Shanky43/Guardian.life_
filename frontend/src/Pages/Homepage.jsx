import { Box, Button, Container, Divider, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { MdLocationPin } from "react-icons/md";
import CarouselProduct from './CarouselProduct';
import Navbar from '../Component/Navbar';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGuardiansData } from '../Redux/HospitalData/action';
import HospitalTable from './HospitalTable';
import useDebounce from './useDebounce';
// import OnboardingModal from './OnboardingModal';

const Homepage = () => {
  // const [toOpen, setToOpen] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [hospitalData, setHospitalData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchQuery = useDebounce(searchText, 1000);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGuardiansData(searchText))
  }, [])
  useEffect(() => {
    if (debouncedSearchQuery) {
      setIsLoading(true);
      dispatch(getGuardiansData(searchText))
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }


  }, [debouncedSearchQuery])
  const data = useSelector((state) =>
    (state.GuardiansReducer.guardiansdata)
  )
  // console.log(searchText, "search text")

  const handleSearch = (event) => {
    // Perform search logic here
    setSearchText(event.target.value)
  };

  useEffect(() => {
    setHospitalData(data)
  }, [data])
  const handleSearchButton = () => {
    dispatch(getGuardiansData(searchText))
  }


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setToOpen(true)
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <div>
      {/* <OnboardingModal toOpen={toOpen} showBtn={false} /> */}
      <Box
        backgroundImage="url('https://www.verywellhealth.com/thmb/oG6M4FE9Lw5vsb--LHwf_SaqiR4=/1255x836/filters:no_upscale():max_bytes(150000):strip_icc()/iStock-695645846-5a84704dc064710036fb5f61.jpg')"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        h="100vh"
      >
        <Box bg="rgba(0, 0, 0, 0.6)" w="100%" h="100%">
          {/* nav-bar start here */}
          <Navbar textColor={"white"} />
          {/* below nav-bar or content section */}
          <Divider orientation="horizontal" />
          <Box>
            <Container maxW="container.xl">
              <Box>
                <Flex justifyContent="space-between" alignContent="center" textColor="white">
                  {/* search box */}
                  <Box w="50%" h="80vh">
                    <VStack float="left" textAlign="left" w="100%">
                      <Box pt="10%">
                        <Heading size="4xl">Search Hospital</Heading>
                      </Box>
                      <Box pt="5%" width="79%">
                        <Text fontSize="xl" width="80%">
                          Discover the best doctor, clinic & hospital the city nearest to you.
                        </Text>
                      </Box>
                      <Box display="flex" justifyContent="center" pt="20%">
                        <Box bgColor="white" width={["100px", "100px", "100px", "500px"]} borderRadius="10px" height={["100px", "100px", "100px", "10vh"]}>
                          <Flex width="100%">
                            <Box height="100%" width="40%" position="relative">
                              <Flex align="center" justifyContent="space-between">
                                <InputGroup size="md" h="10vh">
                                  <Input
                                    type="text"
                                    placeholder="Search hospital"
                                    onChange={handleSearch}
                                    variant="filled"
                                    color="black"
                                    bgColor={"white"}
                                    _hover={{ bg: "none" }}
                                    _focus={{ outline: "none", boxShadow: "none", borderColor: "transparent", bg: "white" }}
                                    h="100%"
                                  />
                                  <InputLeftElement display="flex" alignItems="center">
                                    <IconButton
                                      aria-label="Search"
                                      icon={<SearchIcon />}
                                      _hover={{ bg: "none" }}
                                      variant="ghost"
                                      position="absolute"
                                      color='gray'
                                      top="50%"
                                      left="5px"
                                    />
                                  </InputLeftElement>
                                </InputGroup>
                              </Flex>
                            </Box>
                            <Divider orientation="vertical" />
                            <Box width="40%" h="10vh">
                              <Flex align="center" justifyContent="space-between">
                                <InputGroup size="md" h="10vh">
                                  <Input
                                    type="text"
                                    placeholder="Select a location"
                                    onChange={handleSearch}
                                    variant="filled"
                                    color="black"
                                    _hover={{ bg: "none" }}
                                    _focus={{ outline: "none", boxShadow: "none", borderColor: "transparent", bg: "white" }}
                                    h="100%"
                                    bgColor={"white"}
                                  />
                                  <InputLeftElement display="flex" alignItems="center">
                                    <IconButton
                                      aria-label="location"
                                      icon={<MdLocationPin size={22} color='gray' />}
                                      _hover={{ bg: "none" }}
                                      variant="ghost"
                                      position="absolute"
                                      top="50%"
                                      left="5px"
                                    />
                                  </InputLeftElement>
                                </InputGroup>
                              </Flex>
                            </Box>
                            <Box width="20%" display="flex" alignItems="center" pr="5">
                              <Button bg="#1367f6" h="6vh" _hover={{ bg: "none", color: "#1367f6" }} color="white" w="100%" fontSize="xl" onClick={handleSearchButton}>
                                Search
                              </Button>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </VStack>
                  </Box>
                  {/* carousel starts here  */}
                  <Box w="50%" mt={"10%"} borderRadius={"10px"}>
                    <Box display="flex" justifyContent={"center"} alignItems={"center"} borderRadius={"10px"}>
                      <CarouselProduct />
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Container>
          </Box>
        </Box>
        {/* table start from here */}
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100vh">
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <Box width="80%" margin="auto" minH="80%">
              <HospitalTable hospitalData={hospitalData} setSearchText={setSearchText} />
            </Box>
          )}
        </Box>

      </Box>
    </div>
  );
};

export default Homepage;
