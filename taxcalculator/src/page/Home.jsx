import { Box, Button, Text } from "@chakra-ui/react";
import { FaHome, FaCalculator } from "react-icons/fa";
import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box
            height={"100vh"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgImg={
                'url("https://img.freepik.com/free-photo/calculator-money-notepad-keyboard-yellow-background-flat-lay_169016-24505.jpg?size=626&ext=jpg&uid=R87803818&ga=GA1.1.1811991093.1685605159&semt=ais")'
            }
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
        >
            <Box textAlign="center">
                <Text fontSize={"4xl"} fontWeight={"bold"} >
                    Tax Calculator
                </Text>
                <Box display={'flex'} flexDirection={'column'}>
                    <Link to='/housing'>
                        <Button
                            colorScheme="messenger"
                            size={"lg"}
                            mt={6}
                            leftIcon={<FaHome />}
                        >
                            Housing Rent Allowance
                        </Button>
                    </Link>
                    <Link to='/advance'>
                        <Button
                            colorScheme="messenger"
                            size={"lg"}
                            mt={6}
                            leftIcon={<FaCalculator />}
                        >
                            Advance Tax Calculator
                        </Button>
                    </Link>
                </Box>

            </Box>
        </Box >
    );
}

export default Home;
