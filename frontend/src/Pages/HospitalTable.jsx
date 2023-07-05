import React, { useEffect, useState } from 'react';
import {
    Box,
    Input,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
    VStack,
    Wrap,
    WrapItem,
    TableCaption,
    Select,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const MedicalFacilities = ({ hospitalData, setSearchText }) => {
    const [facilities, setFacilities] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterArea, setFilterArea] = useState('');
    const [typeSelect, setTypeselect] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setFacilities(hospitalData);
    }, [hospitalData]);

    const handleFilterNameChange = (event) => {
        const value = event.target.value;
        setFilterName(value);
        setSearchText(value);
    };

    const handleFilterAreaChange = (event) => {
        const value = event.target.value;
        setFilterArea(value);
        setSearchText(value);
    };
    // const handleFilterChange = (e) => {
    //     const value = e.target;
    //     console.log(value)
    //     // let newTypeSelect = [...typeSelect];

    //     // if (newTypeSelect.includes(value)) {
    //     //     newTypeSelect = newTypeSelect.filter((ele) => ele !== value)
    //     // } else {
    //     //     newTypeSelect.push(value)
    //     // }
    //     // setTypeselect(newTypeSelect)
    // };

    // // useEffect(() => {
    // //     let params = {
    // //         Type: typeSelect
    // //     };
    // //     setSearchParams(params);
    // // }, [typeSelect]);

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box py={4}>
            <Box display="flex" justifyContent="space-between" mb={4}>
                <Input
                    placeholder="Filter by Name"
                    value={filterName}
                    onChange={handleFilterNameChange}
                    maxW="xs"
                />
                <Input
                    placeholder="Filter by Area"
                    value={filterArea}
                    onChange={handleFilterAreaChange}
                    maxW="xs"
                />
                {/* <Box>
                    <Select placeholder="Select an option" color={"grey"} onChange={handleFilterChange}>
                        <option value="private" style={{ color: "black" }}>Private</option>
                        <option value="public" style={{ color: "black" }}>Public</option>
                    </Select>
                </Box> */}

            </Box>

            <Box overflowX="auto">
                <Table variant="simple" mb={4}>
                    <TableCaption placement="top" color={"#1367f6"} fontWeight={600} fontSize={"4xl"}>
                        Medical Facilities
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Area</Th>
                            <Th>Address</Th>
                            <Th>Type</Th>
                            <Th>Available Beds</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {facilities.map((facility) => (
                            <Tr key={facility._id}>
                                <Td>{facility.Name}</Td>
                                <Td>{facility.Area}</Td>
                                <Td>{facility.Address}</Td>
                                <Td>{facility.Type}</Td>
                                <Td>{facility.availablebeds}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default MedicalFacilities;
