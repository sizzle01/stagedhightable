import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const tableHeader = [
  {
    tableHead: 'Item',
  },
  {
    tableHead: 'Price',
    numeric: 'isNumeric',
  },
  {
    tableHead: 'Customer',
  },
  {
    tableHead: 'Payment Status',
  },
]
const tableData = [
  {
    col1: 'inches',
    col2: 'N70,000.00',
    col3: 'Sade Nneka',
  },
  {
    col1: 'inches',
    col2: 'millimetres (mm)',
    col3: '25.4',
  },
]
const Orders = () => {
  return (
    <div>
      <Box w="34%" mt="56px">
        <Flex justifyContent="space-between" mb="30px">
          <Text
            fontFamily="DM Serif Display"
            fontWeight="400"
            fontSize={['22px', '22px', '24px', '26px']}
            color="#212121 "
          >
            Recent Orders
          </Text>
          <Box>
            <Input placeholder="search..." h="45px" w="210px" />
          </Box>
        </Flex>
        <TableContainer>
          <Table variant="simple" size="base">
            <Thead>
              <Tr>
                {tableHeader.map((head, index) => {
                  return (
                    <Th
                      fontFamily="Montserrat"
                      fontWeight="700"
                      fontSize="12px"
                      color="#030303 "
                      isNumeric={head.numeric}
                    >
                      {head.tableHead}
                    </Th>
                  )
                })}
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((data, index) => {
                return (
                  <Tr>
                    <Td>
                      <Flex alignItems="center">
                        <Image src="./orderitem.png" alt="order item" />
                        <Text
                          ml="5px"
                          fontFamily="Montserrat"
                          fontWeight="400"
                          fontSize="12px"
                          color="#666670 "
                        >
                          Sweet pasta alamode
                        </Text>
                      </Flex>
                    </Td>
                    <Td
                      fontFamily="Montserrat"
                      fontWeight="400"
                      fontSize="12px"
                      color="#666670 "
                    >
                      {data.col2}
                    </Td>
                    <Td>{data.col1}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default Orders
