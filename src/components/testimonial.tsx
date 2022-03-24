import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
const Testimonial = () => {
  return (
    <div>
      <Swiper navigation={false} modules={[Navigation]}>
        <SwiperSlide>
          <Box
            paddingY={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg="#F5F5F5"
            position="relative"
          >
            <Box
              w={['90%', '90%', '80%', '67%']}
              display="flex"
              flexDirection={{
                sm: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row',
                base: 'column',
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                w={['90%', '90%', '60%', '60%']}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text
                  fontFamily="montserrat"
                  fontSize={['12px', '16px', '20px', '24px']}
                  fontWeight="400"
                  color="#FF9916"
                  mb="16px"
                >
                  TESTIMONIALS
                </Text>
                <Box>
                  <Text
                    fontFamily="montserrat"
                    fontSize={['22px', '36px', '53px', '55px']}
                    fontWeight="700"
                    color="#000000"
                    mb="50px"
                  >
                    Our Core Values
                  </Text>
                </Box>
                <Text
                  fontFamily="montserrat"
                  fontSize={['14px', '16px', '20px', '20px']}
                  fontWeight="400"
                  color="#000000"
                  mb="20px"
                >
                  Stop wasting time money designing and more other option ,Stop
                  wasting time money designing and more other option.always be
                  pretended someone because they love.
                </Text>
                <Text
                  fontFamily="montserrat"
                  fontSize={['14px', '16px', '20px', '20px']}
                  fontWeight="400"
                  color="#000000"
                  mb="43px"
                >
                  Stop wasting time money designing and more other option ,Stop
                  wasting time money designing
                </Text>
              </Box>
              <Box w={['90%', '90%', '47%', '47%']} position="relative">
                <Image src="./rectangle.png" />
                <Box position="absolute" top={11} left={8}>
                  <Image src="./stack.png" />
                </Box>
                <Box
                  bottom={['1%', '15%', '-20%', '1%']}
                  left={['17%', '8%', '10%', '15%']}
                  w={['90%', '90%', '90%', '100%']}
                  bg="#FBFBFB"
                  paddingX={2}
                  paddingY={5}
                  borderRadius="10px"
                  position="absolute"
                >
                  <Text
                    fontFamily="montserrat"
                    fontSize={['12px', '16px', '16px', '20px']}
                    fontWeight="400"
                    color="#000000"
                    mb={['30px', '36px', '50px', '80px']}
                    mt="20px"
                  >
                    “Stop wasting time money designing and more other option
                    ,Stop wasting time money designing .”
                  </Text>
                  <Box display="flex">
                    <Image src="./testimonialImage.png" alt="customer" />
                    <Box ml="10px">
                      <Text
                        fontFamily="montserrat"
                        fontSize={['16px', '16px', '20px', '20px']}
                        fontWeight="400"
                        color="#000000"
                      >
                        Ridwan Lawal (RJL)
                      </Text>
                      <Text
                        fontFamily="montserrat"
                        fontSize={['12px', '12px', '16px', '16px']}
                        fontWeight="400"
                        color="#898888"
                      >
                        CEO , Hightable
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
