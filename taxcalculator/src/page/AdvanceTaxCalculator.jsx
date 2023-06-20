import { Box, FormControl, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { taxOptions } from "../utils/taxoptions";
import LPP from "../components/LPP";
const AdvanceTaxCalculator = () => {
    const [taxPayer, setTaxPayer] = useState("");
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
                    width={{ base: "100%", md: "fit-content" }}
                    bg={"rgb(59,154,198)"}
                    px={6}
                    py={4}
                    color={"white"}
                    textAlign={{ base: "center", md: "left" }}
                >
                    ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24
                </Text>
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
                    <Text>Tax Payer</Text>
                </Box>
                <Box>
                    <FormControl>
                        <Select
                            width={"215px"}
                            bg={"white"}
                            onChange={(e) => setTaxPayer(e.target.value)}
                        >
                            <option value="">Select</option>
                            {taxOptions.map((item) => {
                                return (
                                    <option key={item.id} value={item.taxOption}>
                                        {item.taxOption}
                                    </option>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            {taxPayer === "LLP" && <LPP />}
        </Box>
    );
};

export default AdvanceTaxCalculator;
