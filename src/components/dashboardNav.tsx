import { Box, Flex, Text, Image } from '@chakra-ui/react'

import React from 'react'

const DashboardNav = () => {
  return (
    <div>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="94px"
          width="85%"
          bg="#ffffff"
          boxShadow="0px 1px 13px rgba(78, 51, 0, 0.11)"
        >
          <Flex w="94%" h="94px" border="1px solid red ">
            <Box display="flex">
              <Image src="./businessmenu.png" alt="business icon" bg="red" />
              <Text>Business</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default DashboardNav
