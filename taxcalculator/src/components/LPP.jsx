import { Box, FormControl, Input, Select, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

const LPP = ({ option }) => {
    const [netTaxableIncome, setNetTaxableIncome] = useState("");
    const [incomeTax, setIncomeTax] = useState("");
    const [surcharge, setSurcharge] = useState("");
    const [cess, setCess] = useState("");
    const [totalTaxLiability, setTotalTaxLiability] = useState("");
    const [relief, setRelief] = useState("");
    const [tdsCredit, setTdsCredit] = useState("");
    const [assessedTax, setAssessedTax] = useState("");
    const [Section115BAC, setSection115BAC] = useState(false);
    const [CoOperativeBAD, setCoOperativeBAD] = useState(false);
    const [CoOperativeBAE, setCoOperativeBAE] = useState(false);

    const calculateAdvanceTax = () => {
        if (option === "Domestic Company") {
            const taxRate = Section115BAC ? 0.25 : 0.3;
            const incomeTax = netTaxableIncome * taxRate;
            const surcharge = incomeTax > 10000000 ? incomeTax * 0.07 : 0;
            const educationCess = incomeTax * 0.04;
            const totalTaxLiability = incomeTax + surcharge + educationCess;
            const assessedTax = totalTaxLiability - relief - tdsCredit;

            setIncomeTax(incomeTax);
            setSurcharge(surcharge);
            setCess(educationCess);
            setTotalTaxLiability(totalTaxLiability);
            setAssessedTax(assessedTax);
        } else if (option === "Foreign Company") {
            const taxRate = Section115BAC ? 0.4 : 0.4;
            const incomeTax = netTaxableIncome * taxRate;
            const surcharge = incomeTax > 10000000 ? incomeTax * 0.02 : 0;
            const educationCess = incomeTax * 0.04;
            const totalTaxLiability = incomeTax + surcharge + educationCess;
            const assessedTax = totalTaxLiability - relief - tdsCredit;

            setIncomeTax(incomeTax);
            setSurcharge(surcharge);
            setCess(educationCess);
            // setSecondaryCess(secondaryCess);
            setTotalTaxLiability(totalTaxLiability);
            setAssessedTax(assessedTax);
        } else if (option === "Firms") {
            const taxRate = 0.3;
            const incomeTax = netTaxableIncome * taxRate;
            const surcharge = incomeTax > 360000 ? incomeTax * 0.12 : 0;
            const educationCess = incomeTax * 0.012;

            const totalTaxLiability = incomeTax + surcharge + educationCess;
            const assessedTax = totalTaxLiability - relief - tdsCredit;

            setIncomeTax(incomeTax);
            setSurcharge(surcharge);
            setCess(educationCess);

            setTotalTaxLiability(totalTaxLiability);
            setAssessedTax(assessedTax);
        } else if (option === "Co-operative Society") {
            const taxRate =
                netTaxableIncome <= 10000
                    ? 1
                    : netTaxableIncome <= 20000
                        ? 0.2
                        : netTaxableIncome <= 1000000
                            ? 0.3
                            : 0.3;
            const incomeTax = netTaxableIncome * taxRate;
            const surcharge = incomeTax > 250000 ? incomeTax * 0.5 : 0;
            const educationCess = incomeTax * 0.04;
            const totalTaxLiability = incomeTax + surcharge + educationCess;
            const assessedTax = totalTaxLiability - relief - tdsCredit;

            setIncomeTax(incomeTax);
            setSurcharge(surcharge);
            setCess(educationCess);
            setTotalTaxLiability(totalTaxLiability);
            setAssessedTax(assessedTax);
        } else if (option === "LLP") {
            const taxRate =
                netTaxableIncome <= 250000
                    ? 0
                    : netTaxableIncome <= 500000
                        ? 0.05
                        : netTaxableIncome <= 1000000
                            ? 0.2
                            : 0.3;
            const incomeTax = netTaxableIncome * taxRate;
            const surcharge = incomeTax > 300000 ? incomeTax * 0.05 : 0;
            const educationCess = incomeTax * 0.04;
            const totalTaxLiability = incomeTax + surcharge + educationCess;
            const assessedTax = totalTaxLiability - relief - tdsCredit;

            setIncomeTax(incomeTax);
            setSurcharge(surcharge);
            setCess(educationCess);
            setTotalTaxLiability(totalTaxLiability);
            setAssessedTax(assessedTax);
        } else if (option === "HUF") {
            const taxRate = Section115BAC
                ? netTaxableIncome <= 250000
                    ? 0
                    : netTaxableIncome <= 500000
                        ? 0.05
                        : netTaxableIncome <= 750000
                            ? 0.1
                            : netTaxableIncome <= 1000000
                                ? 0.15
                                : netTaxableIncome <= 1250000
                                    ? 0.2
                                    : netTaxableIncome <= 1500000
                                        ? 0.25
                                        : 0.3
                : netTaxableIncome <= 250000
                    ? 0
                    : netTaxableIncome <= 500000
                        ? 0.05
                        : netTaxableIncome <= 750000
                            ? 0.1
                            : netTaxableIncome <= 1000000
                                ? 0.15
                                : netTaxableIncome <= 1250000
                                    ? 0.2
                                    : netTaxableIncome <= 1500000
                                        ? 0.25
                                        : 0.3;
            const incomeTax = netTaxableIncome * taxRate;
            const surcharge = incomeTax > 250000 ? incomeTax * 0.5 : 0;
            const educationCess = incomeTax * 0.04;
            const totalTaxLiability = incomeTax + surcharge + educationCess;
            const assessedTax = totalTaxLiability - relief - tdsCredit;

            setIncomeTax(incomeTax);
            setSurcharge(surcharge);
            setCess(educationCess);
            setTotalTaxLiability(totalTaxLiability);
            setAssessedTax(assessedTax);
        } else if (option === "AOPs/BOI") {
            const taxRate = Section115BAC ? 0.3 : 0.36;
            const incomeTax = netTaxableIncome * taxRate;
            const surcharge = incomeTax > 10000 ? incomeTax * 0.2 : 0;
            const educationCess = incomeTax * 0.04;
            const totalTaxLiability =
                incomeTax + surcharge + educationCess
            const assessedTax =
                totalTaxLiability - relief - tdsCredit;

            setIncomeTax(incomeTax);
            setSurcharge(surcharge);
            setCess(educationCess);
            setTotalTaxLiability(totalTaxLiability);
            setAssessedTax(assessedTax);
        }
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
        setSection115BAC(false);
        setCoOperativeBAD(false);
        setCoOperativeBAE(false);
    };
    useEffect(() => {
        if (option) {
            calculateAdvanceTax();
        }
    }, [option]);
    return (
        <>
            {(option === "HUF" || option === "AOPs/BOI") && (
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
                            <Select
                                bg={"white"}
                                onChange={(e) => setSection115BAC(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            )}

            {option === "Co-operative Society" && (
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
                                <Select
                                    bg={"white"}
                                    onChange={(e) =>
                                        setCoOperativeBAE(e.target.value == "Yes" ? true : false)
                                    }
                                    isDisabled={CoOperativeBAD}
                                >
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
                                <Select
                                    bg={"white"}
                                    onChange={(e) =>
                                        setCoOperativeBAD(e.target.value === "Yes" ? true : false)
                                    }
                                    isDisabled={CoOperativeBAE}
                                >
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
                    onClick={calculateAdvanceTax}
                    title={"Calculate"}
                />

                <CustomButton
                    bg={"gray.400"}
                    color={"white"}
                    onClick={handleReset}
                    title={"Reset"}
                />
            </Box>
        </>
    );
};

export default LPP;
