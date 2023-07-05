import React, { useEffect, useState } from 'react';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';

const UserDataTable = ({ userDatas }) => {
    const [isDataPresent, setIsDataPresent] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (userDatas && userDatas.length > 0) {
            setUserData(userDatas[0]);
            setIsDataPresent(true);
        } else {
            setIsDataPresent(false);
        }
    }, [userDatas]);

    return (
        <Box overflowX="auto" w="80%" margin="auto">
            {isDataPresent ? (
                <Table variant="striped" colorScheme="gray">
                    <Thead>
                        <Tr bgColor="#049fe5">
                            <Th>Field</Th>
                            <Th>Value</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name</Td>
                            <Td>{userData.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>{userData.email}</Td>
                        </Tr>
                        <Tr>
                            <Td>Phone Number</Td>
                            <Td>{userData.phoneNumber}</Td>
                        </Tr>
                        <Tr>
                            <Td>Allergies</Td>
                            <Td>{userData.allergies}</Td>
                        </Tr>
                        <Tr>
                            <Td>Current Medications</Td>
                            <Td>{userData.medications}</Td>
                        </Tr>
                        <Tr>
                            <Td>Medical Conditions</Td>
                            <Td>{userData.conditions}</Td>
                        </Tr>
                        <Tr>
                            <Td>Contact Name</Td>
                            <Td>{userData.emergencyContact?.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>Contact Phone Number</Td>
                            <Td>{userData.emergencyContact?.phoneNumber}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            ) : null}
        </Box>
    );
};

export default UserDataTable;
