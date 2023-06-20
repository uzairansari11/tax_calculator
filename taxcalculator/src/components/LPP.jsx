import { Box, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from './CustomButton';

const LPP = () => {
    return (
        <Box>
            {/* Net Taxable Income */}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
            >
                <Box>
                    <Text>Net Taxable Income</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>

            {/* Income Tax */}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
                bg={"rgb(235,235,235)"}
            >
                <Box>
                    <Text>Income Tax</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>


            {/* Surcharge */}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
            >
                <Box>
                    <Text>Surcharge</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>



            {/* Health and Education Cess */}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
            >
                <Box>
                    <Text>Health and Education Cess</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>



            {/* Total Tax Liability */}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
                bg={"rgb(235,235,235)"}
            >
                <Box>
                    <Text>Total Tax Liability</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>



            {/* Relief*/}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
            >
                <Box>
                    <Text>Relief</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>



            {/* TDS/TCS/MAT (AMT) Credit Utilized */}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
                bg={"rgb(235,235,235)"}
            >
                <Box>
                    <Text>TDS/TCS/MAT (AMT) Credit Utilized</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>



            {/* Assessed Tax*/}
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={6}
                py={2}
                width={"100%"}
            >
                <Box>
                    <Text>Assessed Tax</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Input type="number" bg={"white"} />
                    </FormControl>
                </Box>
            </Box>
            <Box
                display={"flex"}
                justifyContent={"center"}
                px={10}
                flexDirection={{ base: "column", md: "row" }}
                gap={4}
                py={4}
            >
                <CustomButton
                    bg={"red.400"}
                    color={"white"}
                    // onClick={calculateHRA}
                    title={"Calculate"}
                />

                <CustomButton
                    bg={"gray.400"}
                    color={"white"}
                    // onClick={handleReset}
                    title={"Reset"}
                />
            </Box>

        </Box>
    );
};

export default LPP;
