import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselProduct = () => {
    return (
        <Box borderRadius={"10px"}>
            <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"10px"}>
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000} emulateTouch={true} showArrows={false}>
                    <Box >
                        <Image src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ips_ah.webp" width={"100%"} height={"500px"} alt="doctor" borderRadius={"10px"} />

                    </Box>
                    <Box>
                        <Image src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80" width={"100%"} height={"500px"} alt="bed" borderRadius={"10px"} />

                    </Box>
                    <Box>
                        <Image src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" width={"100%"} height={"500px"} alt="doctors" borderRadius={"10px"} />

                    </Box>
                    <Box>
                        <Image src="https://tractorsinfo.com/wp-content/uploads/2020/10/Force-Traveller-Ambulance-2.jpg" width={"100%"} height={"500px"} alt="ambulance" borderRadius={"10px"} />

                    </Box>
                    <Box>
                        <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" width={"100%"} height={"500px"} alt="doctor operation" borderRadius={"10px"} />

                    </Box>
                </Carousel>
            </Box>
        </Box>
    )
}

export default CarouselProduct