import { Avatar, Box, Button, Container, Divider, Flex, HStack, Input, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import OnboardingModal from './OnboardingModal'
import { AiOutlineEdit } from "react-icons/ai"


const OnboardingPage = () => {
    const [userName, setUserName] = useState("Shankar")
    const [userData, setUserData] = useState({
        email: "example@example.com",
        phoneNumber: "1234567890",
        location: "New Delhi"
    })
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        setIsEditing(false);
        // Handle save operation here
    }

    return (
        <>
            <Box>
                <Box>
                    <Navbar textColor={"black"} />
                </Box>
                <Divider orientation="horizontal" />
                <Box mt="10">
                    <Container maxW={"80%"} borderRadius={"20px"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                        <Flex justifyContent={"space-between"} p="5">
                            {/* avatar section */}
                            <Box p="2">
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name='Dan Abrahmov' size={"xl"} src='https://bit.ly/dan-abramov' />
                                    </WrapItem>
                                </Wrap>
                            </Box>

                            {/* name and email section */}
                            <Box w={"40%"}>
                                <VStack alignItems="flex-start">
                                    <Box float="left" w="full">
                                        <Flex alignItems="center">
                                            <Box w="50%"><Text textAlign={"left"} fontWeight={700}>Name :</Text>    </Box>
                                            {isEditing ? (
                                                <Box w="50%"><Input
                                                    type="text"
                                                    name="userName"
                                                    value={userName}
                                                    onChange={(e) => setUserName(e.target.value)}
                                                /> </Box>
                                            ) : (
                                                <Box w="50%"> <Text textAlign={"left"}>{userName}</Text> </Box>
                                            )}
                                        </Flex>
                                    </Box>
                                    <Box float="left" w="full">
                                        <Flex alignItems="center">
                                            <Box w="50%"> <Text textAlign={"left"} fontWeight={700}>Email :</Text> </Box>
                                            <Box w="50%">  <Text textAlign={"left"}>{userData.email}</Text> </Box>
                                        </Flex>
                                    </Box>
                                    <Box float="left" w="full">
                                        <Flex alignItems="center">
                                            <Box w="50%"><Text textAlign={"left"} fontWeight={700}>Phone Number :</Text></Box>
                                            {isEditing ? (
                                                <Box w="50%"> <Input
                                                    type="text"
                                                    name="phoneNumber"
                                                    value={userData.phoneNumber}
                                                    onChange={handleChange}
                                                /> </Box>
                                            ) : (
                                                <Box w="50%"> <Text textAlign={"left"}>{userData.phoneNumber}</Text> </Box>
                                            )}
                                        </Flex>
                                    </Box>
                                    <Box float="left" w="full">
                                        <Flex alignItems="center">
                                            <Box w="50%"><Text textAlign={"left"} fontWeight={700}>Location:</Text> </Box>
                                            {isEditing ? (
                                                <Box w="50%"><Input
                                                    type="text"
                                                    name="location"
                                                    value={userData.location}
                                                    onChange={handleChange}
                                                /> </Box>
                                            ) : (
                                                <Box w="50%"> <Text textAlign={"left"}>{userData.location}</Text> </Box>
                                            )}
                                        </Flex>
                                    </Box>
                                </VStack>
                            </Box >

                            {/* add details section */}
                            < Box w={"40%"} alignItems="center" display={"flex"} justifyContent="center" >
                                <HStack spacing={2} alignItems="center">
                                    {/* details edit button */}
                                    {!isEditing ? (
                                        <Button size="md" onClick={handleEdit}> <Flex><AiOutlineEdit size={20} /> <Text pl="3">Edit</Text></Flex> </Button>
                                    ) : (
                                        <Button size="md" onClick={handleSave}>Save</Button>
                                    )}
                                    {/* Onboarding profile for user */}
                                    <OnboardingModal />
                                </HStack>
                            </Box >
                        </Flex >
                    </Container >
                </Box >
                {/* OnBoarding details */}
                <Box>

                </Box>
            </Box >
        </>
    )
}

export default OnboardingPage
