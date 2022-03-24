import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import Buttons from './buttons'

const businessSolutions = [
  {
    icon: './food.png',
    businessType: 'Restaurants & Nightlife',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: './function.png',
    businessType: 'Event Organizers',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: './shortlet.png',
    businessType: 'Hotels & Shortlets',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    icon: './tour.png',
    businessType: 'Restaurants & Nightlife',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
]
const BusinessSolutions = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="70px"
      >
        <Box textAlign="center" w={['90%', '90%', '70%', '40%']} mb="50px">
          <Text
            fontFamily="montserrat"
            fontSize={['18px', '20px', '24px', '30px']}
            fontWeight="700"
            color="#000000"
            mb="25px"
          >
            Find the right solutions for your business
          </Text>

          <Text
            fontFamily="montserrat"
            fontSize={['14px', '16px', '16px', '18px']}
            fontWeight="400"
            color="#000000"
            mb="40px"
          >
            Stop wasting time and money designing and managing a website, Find
            the right solutions for your business
          </Text>
        </Box>

        <Box
          w={['100%', '100%', '90%', '80%']}
          display="flex"
          flexDirection={{
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
            base: 'column',
          }}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          {businessSolutions.map((solution, index) => {
            return (
              <Box
                key={index}
                my={2}
                bg="#ffffff"
                w={['90%', '90%', '45%', '45%']}
                boxShadow="1.46958e-15px 6px 17px rgba(85, 61, 0, 0.06), inset -4.0495e-16px -6.61333px 7px rgba(240, 240, 240, 0.62), inset 4.0495e-16px 6.61333px 6.61333px #FFFFFF"
              >
                <Box
                  display="flex"
                  flexDirection={{
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                    base: 'column',
                  }}
                  padding={6}
                >
                  <Box mt="5px" mb={['20px', '10px', '0px', '0px']}>
                    <Image src={solution.icon} alt="restaurant" />
                  </Box>

                  <Box
                    ml={['0px', '0px', '31px', '31px']}
                    w={['90%', '90%', '80%', '70%']}
                  >
                    <Text
                      fontFamily="montserrat"
                      fontSize={['16px', '16px', '18px', '20px']}
                      fontWeight="700"
                      color="#000000"
                    >
                      {solution.businessType}
                    </Text>
                    <Text
                      fontFamily="montserrat"
                      fontSize={['12px', '14px', '14px', '14px']}
                      fontWeight="400"
                      color="#666670"
                    >
                      {solution.text}
                    </Text>
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Box>
        <Box mt="100px">
          <Buttons
            type="submit"
            description="Register your Business now"
            background="#212121"
            color="#ffffff"
            width="100%"
            height="65px"
            fontSize="14px"
            _focus={{ boxShadow: 'none' }}
          />
        </Box>
      </Box>
    </div>
  )
}

export default BusinessSolutions
