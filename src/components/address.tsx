import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const addressInformation = [
  {
    icon: './point.png',
    info: 'hightable@htbusiness.com',
  },
  {
    icon: './point.png',
    info: 'Elizabeth St. Melbourne, VI, Lagos',
  },
  {
    icon: './point.png',
    info: '+234 123 456 789, +033 1212-574-864',
  },
]
const Address = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          mt="100px"
          mb="40px"
          w={['90%', '90%', '80%', '60%']}
        >
          <Text
            fontFamily="Montserrat"
            fontSize={['22px', '30px', '40px', '55px']}
            fontWeight="600"
            color="#000000"
          >
            Looking For Us?
          </Text>
          <Text
            fontFamily="Montserrat"
            fontSize={['14px', '14px', '18px', '18px']}
            fontWeight="400"
            color="#000000"
          >
            Stop wasting time and money designing and managing a website. that
            doesn’t get results. Happiness guaranteed!
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection={{
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
            base: 'column',
          }}
          alignItems={{
            sm: 'left',
            md: 'center',
            lg: 'center',
            xl: 'center',
            base: 'left',
          }}
        >
          {addressInformation.map((address, index) => {
            return (
              <Box mr="30px" mb="38px" display="flex" key="index">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  h="30px"
                  w="30px"
                  bg="#000000"
                  borderRadius="50%"
                >
                  <Image src={address.icon} alt="pointer" />
                </Box>

                <Text
                  fontFamily="Montserrat"
                  fontSize={['12px', '14px', '16px', '16px']}
                  fontWeight="400"
                  color="#000000"
                  ml="10px"
                >
                  {address.info}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Box>
    </div>
  )
}

export default Address
