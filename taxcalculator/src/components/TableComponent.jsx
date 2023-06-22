import { Box, Text, Th, Thead, Tr, Tbody, Td, Table } from "@chakra-ui/react";
import React from "react";

const TableComponent = ({ june, sept, dec, mar }) => {
  return (
    <Box w={"80%"} m={"auto"} mt={"60px"}>
      <Text fontSize={"20px"} fontWeight={"500"} textAlign={'center'}>
        Advance Tax liability
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Advance Tax Liability</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Advance tax payable upto June 15, 2023 (Cumulative)</Td>
            <Td>{june}</Td>
          </Tr>
          <Tr>
            <Td>Advance tax payable upto September 15, 2022 (Cumulative)</Td>

            <Td>{sept}</Td>
          </Tr>
          <Tr>
            <Td>Advance tax payable upto December 15, 2022 (Cumulative)</Td>

            <Td>{dec}</Td>
          </Tr>
          <Tr>
            <Td>Advance tax payable upto March 15, 2023 (Cumulative)</Td>

            <Td>{mar}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
