import React, { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    Input,
    Text,
} from "@chakra-ui/react";

const HousingRentAllowance = () => {
    const [basicSalary, setBasicSalary] = useState(0);
    const [daSalary, setDaSalary] = useState(0);
    const [commission, setCommission] = useState(0);
    const [hraReceived, setHraReceived] = useState(0);
    const [rentPaid, setRentPaid] = useState(0);
    const [isMetroCity, setIsMetroCity] = useState(false);
    const [exemptedHra, setExemptedHra] = useState(0);
    const [taxableHra, setTaxableHra] = useState(0);

    const calculateHRA = () => {
        const calculateHraExemption = () => {
            const isResidingInMetroCity = isMetroCity ? 0.5 : 0.4;
            const hraExemption = Math.min(
                isResidingInMetroCity * basicSalary,
                rentPaid - 0.1 * basicSalary,
                hraReceived
            );
            return hraExemption;
        };
        const hraExemption = calculateHraExemption();
        const taxableHra = hraReceived - hraExemption;

        setExemptedHra(hraExemption);
        setTaxableHra(taxableHra);
    };
    return (
        <Box m={0} p={0} width={"80%"} margin={"auto"} border={"1px solid gray"}>
            <Box
                bg={"rgb(235,235,235)"}
                display={"flex"}
                alignItems={"center"}
                py={2}
                justifyContent={"center"}
            >
                <Text>(As amended upto Finance Act, 2023)</Text>
            </Box>
            <Box mt={2}>
                <Text
                    width={"fit-content"}
                    bg={"rgb(59,154,198)"}
                    px={6}
                    py={4}
                    color={"white"}
                >
                    HOUSE RENT ALLOWANCE
                </Text>
            </Box>
            <form>
                <Box
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    bg={"rgb(235,235,235)"}
                    justifyContent={"space-between"}
                    px={6}
                    py={2}
                    width={"100%"}
                >
                    <Box>
                        <Text>Basic salary</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Input
                                type="number"
                                bg={"white"}
                                value={basicSalary === 0 ? "" : basicSalary}
                                onChange={(e) => setBasicSalary(Number(e.target.value))}
                            />
                        </FormControl>
                    </Box>
                </Box>

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
                        <Text>DA forming part of salary</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Input
                                type="number"
                                bg={"white"}
                                value={daSalary === 0 ? "" : daSalary}
                                onChange={(e) => setDaSalary(Number(e.target.value))}
                            />
                        </FormControl>
                    </Box>
                </Box>

                <Box
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    bg={"rgb(235,235,235)"}
                    justifyContent={"space-between"}
                    px={6}
                    py={2}
                    width={"100%"}
                >
                    <Box>
                        <Text>Commission (as % of turnover achieved by the employee)</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Input
                                type="number"
                                bg={"white"}
                                value={commission === 0 ? "" : commission}
                                onChange={(e) => setCommission(Number(e.target.value))}
                            />
                        </FormControl>
                    </Box>
                </Box>

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
                        <Text>HRA Received</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Input
                                type="number"
                                bg={"white"}
                                value={hraReceived === 0 ? "" : hraReceived}
                                onChange={(e) => setHraReceived(Number(e.target.value))}
                            />
                        </FormControl>
                    </Box>
                </Box>

                <Box
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    bg={"rgb(235,235,235)"}
                    justifyContent={"space-between"}
                    px={6}
                    py={2}
                    width={"100%"}
                >
                    <Box>
                        <Text>Rent Paid</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Input
                                type="number"
                                bg={"white"}
                                value={rentPaid === 0 ? "" : rentPaid}
                                onChange={(e) => setRentPaid(Number(e.target.value))}
                            />
                        </FormControl>
                    </Box>
                </Box>

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
                        <Text>Tick if residing in metro city.</Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        px={2}
                        justifyContent={"left"}
                        width={{ base: "100%", md: "22%" }}
                    >
                        <FormControl display="flex" alignItems="center">
                            <Checkbox
                                isChecked={isMetroCity}
                                onChange={(e) => setIsMetroCity(e.target.checked)}
                                size="sm"
                                colorScheme="blue"
                            />
                            <Text ml={5}>Tick if yes</Text>
                        </FormControl>
                    </Box>
                </Box>

                <Box
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    bg={"rgb(235,235,235)"}
                    justifyContent={"space-between"}
                    px={6}
                    py={2}
                    width={"100%"}
                >
                    <Box>
                        <Text>Exempted House Rent Allowance</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Input
                                type="number"
                                bg={"white"}
                                value={exemptedHra.toFixed(2)}
                                disabled
                            />
                        </FormControl>
                    </Box>
                </Box>
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
                        <Text>Taxable House Rent Allowance</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Input
                                type="number"
                                bg={"white"}
                                value={taxableHra.toFixed(2)}
                                disabled
                            />
                        </FormControl>
                    </Box>
                </Box>
            </form>
            <Box display={"flex"} justifyContent={"center"}
                px={10} flexDirection={{ base: "column", md: 'row' }}
                gap={4} py={4}>
                <Button bg="red.400" color={"white"} onClick={calculateHRA}>
                    Calculate
                </Button>
                <Button
                    bg="gray.400"
                    color={"white"}
                    onClick={() => {
                        setBasicSalary(0);
                        setDaSalary(0);
                        setCommission(0);
                        setHraReceived(0);
                        setRentPaid(0);
                        setIsMetroCity(false);
                        setExemptedHra(0);
                        setTaxableHra(0);
                    }}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    );
};

export default HousingRentAllowance;
