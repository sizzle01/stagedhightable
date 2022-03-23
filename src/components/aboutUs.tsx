import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Box mt={['80px', '90px', '130px', '174px']}>
        <Box display="flex" justifyContent="center">
          <Box w="50%">
            <Text
              fontFamily="poppins"
              fontSize={['12px', '16px', '20px', '24px']}
              fontWeight="400"
              color="#FF9916"
              mb="40px"
            >
              A LITTLE MORE ABOUT US
            </Text>
            <Text
              fontFamily="montserrat"
              fontSize={['22px', '25px', '33px', '45px']}
              fontWeight="500"
              color="#000000"
            >
              Frequently Asked Questions About Hightable
            </Text>
          </Box>
          <Box w="50%">
            <Image src="./aboutimage.png" alt="about image" w="100%" />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutUs
