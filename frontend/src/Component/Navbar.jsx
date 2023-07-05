import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ textColor }) => {
    return (
        <>
            <Flex align="center" justifyContent="space-between">
                {/* for logo */}
                <Box p={5} w="40%">
                    <Link to="/"> <Heading as="h1" color="#049fe5" size="2xl">
                        Healthcare Connect
                    </Heading>   </Link>
                </Box>

                <Box w="50%" color={textColor}>
                    <Flex float="center" justifyContent="space-around">
                        <Link to="/">  <Box fontSize="xl" fontWeight={600} cursor="pointer">Home</Box></Link>
                        <Box fontSize="xl" fontWeight={600} cursor="pointer">About</Box>
                        <Link to="/onboarding"> <Box fontSize="xl" fontWeight={600} cursor="pointer">Enrollment</Box></Link>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default Navbar