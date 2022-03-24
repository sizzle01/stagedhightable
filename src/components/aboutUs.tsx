import { Box, Image, Text } from '@chakra-ui/react'
import Faq from 'react-faq-component'
import React from 'react'
import data from '../../FaqData'

const AboutUs = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={['50px', '60px', '80px', '94px']}
      >
        <Box
          w={['100%', '90%', '80%', '80%']}
          mt={['80px', '90px', '130px', '174px']}
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
            alignItems="center"
            justifyContent="center"
          >
            <Box w={['90%', '90%', '50%', '50%']}>
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
              <Box>
                <Faq
                  data={data}
                  styles={{
                    bgColor: 'white',
                    rowTitleColor: '#000000',
                    rowTitleTextSize: '15px',
                    rowContentColor: '#000000',
                    rowContentTextSize: '13px',
                    rowContentPaddingTop: '5px',
                    rowContentPaddingBottom: '5px',
                    rowContentPaddingLeft: '20px',
                    rowContentPaddingRight: '10px',
                    arrowColor: '#000000',
                  }}
                  config={{
                    animate: true,
                  }}
                />
              </Box>
            </Box>
            <Box w={['90%', '90%', '50%', '50%']}>
              <Image src="./aboutimage.png" alt="about image" w="100%" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutUs
