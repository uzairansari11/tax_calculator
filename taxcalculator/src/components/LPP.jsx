import { Box, FormControl, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const LPP = ({ option }) => {
    console.log(option);
    const [netTaxableIncome, setNetTaxableIncome] = useState("");
    const [incomeTax, setIncomeTax] = useState("");
    const [surcharge, setSurcharge] = useState("");
    const [cess, setCess] = useState("");
    const [totalTaxLiability, setTotalTaxLiability] = useState("");
    const [relief, setRelief] = useState("");
    const [tdsCredit, setTdsCredit] = useState("");
    const [assessedTax, setAssessedTax] = useState("");

    const calculateLLPTax = () => {
        const netIncome = parseFloat(netTaxableIncome) || 0;
        const tax = parseFloat(incomeTax) || 0;
        const surchargeAmount = parseFloat(surcharge) || 0;
        const cessAmount = parseFloat(cess) || 0;
        const reliefAmount = parseFloat(relief) || 0;
        const tdsCreditAmount = parseFloat(tdsCredit) || 0;
        const assessedTaxAmount = parseFloat(assessedTax) || 0;

        const totalTaxLiability =
            tax +
            surchargeAmount +
            cessAmount -
            reliefAmount -
            tdsCreditAmount +
            assessedTaxAmount;

        setTotalTaxLiability(totalTaxLiability.toFixed(2));
    };

    const handleReset = () => {
        setNetTaxableIncome("");
        setIncomeTax("");
        setSurcharge("");
        setCess("");
        setTotalTaxLiability("");
        setRelief("");
        setTdsCredit("");
        setAssessedTax("");
    };

    return (
        <>
            {(option == "HUF" || option == "AOPs/BOI") && (
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
                        <Text>Whether opting for taxation under Section 115BAC?</Text>
                    </Box>
                    <Box>
                        <FormControl>
                            <Select bg={"white"}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            )}

            {option == "Co-operative Society" && (
                <Box display={"flex"} flexDir={"column"}>
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
                            <Text>
                                Co-operative society opted and qualify for section 115BAE
                            </Text>
                        </Box>
                        <Box>
                            <FormControl>
                                <Select bg={"white"}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Select>
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
                            <Text>
                                Co-operative society opted and qualify for section 115BAD
                            </Text>
                        </Box>
                        <Box>
                            <FormControl>
                                <Select bg={"white"}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            )}

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
                            <Input
                                type="number"
                                bg={"white"}
                                value={netTaxableIncome}
                                onChange={(e) => setNetTaxableIncome(e.target.value)}
                            />
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
                            <Input
                                type="number"
                                bg={"white"}
                                value={incomeTax}
                                onChange={(e) => setIncomeTax(e.target.value)}
                            />
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
                            <Input
                                type="number"
                                bg={"white"}
                                value={surcharge}
                                onChange={(e) => setSurcharge(e.target.value)}
                            />
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
                            <Input
                                type="number"
                                bg={"white"}
                                value={cess}
                                onChange={(e) => setCess(e.target.value)}
                            />
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
                            <Input
                                type="number"
                                bg={"white"}
                                value={totalTaxLiability}
                                disabled
                            />
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
                            <Input
                                type="number"
                                bg={"white"}
                                value={relief}
                                onChange={(e) => setRelief(e.target.value)}
                            />
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
                            <Input
                                type="number"
                                bg={"white"}
                                value={tdsCredit}
                                onChange={(e) => setTdsCredit(e.target.value)}
                            />
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
                            <Input
                                type="number"
                                bg={"white"}
                                value={assessedTax}
                                onChange={(e) => setAssessedTax(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default LPP;
