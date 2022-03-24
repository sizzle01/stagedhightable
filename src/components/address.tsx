import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'

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
        <Box mb="30px" w={['90%', '90%', '80%', '70%']}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            width="100%"
            height="400px"
            style={{ border: '0' }}
            loading="lazy"
          ></iframe>
        </Box>
        <Box
          mr={['11%', '50%', '00%', '0%']}
          display="flex"
          flexDirection={{
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
            base: 'column',
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
