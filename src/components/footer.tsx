import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import SelectField from './selectField'

const menuItems = [
  {
    menu: 'careers',
  },
  {
    menu: 'Contact Us',
  },
  {
    menu: 'Our Story',
  },
]
const icons = [
  {
    icon: './facebook.png',
  },
  {
    icon: './twitter.png',
  },
  {
    icon: './linkedin.png',
  },
  {
    icon: './youtube.png',
  },
  {
    icon: './twitter.png',
  },
]
const Footer = () => {
  return (
    <div>
      <Box>
        <Box
          mt={['150%', '100%', '15%', '10%']}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w={['90%', '85%', '85%', '85%']}
            display="flex"
            flexDirection={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box display="flex">
              <Box mr="46px" ml={['0px', '50px', '0px', '0px']}>
                <Text
                  fontFamily="Montserrat"
                  fontSize="14px"
                  fontWeight="700"
                  color="#030303"
                  mb="16px"
                >
                  Company
                </Text>
                <Box>
                  {menuItems.map((menuItem, index) => {
                    return (
                      <Text
                        key={index}
                        fontFamily="Montserrat"
                        fontSize="13px"
                        fontWeight="500"
                        color="#878787"
                        mb="12px"
                      >
                        {menuItem.menu}
                      </Text>
                    )
                  })}
                </Box>
              </Box>
              <Box mr="46px" ml={['0px', '50px', '0px', '0px']}>
                <Text
                  fontFamily="Montserrat"
                  fontSize="14px"
                  fontWeight="700"
                  color="#030303"
                  mb="16px"
                >
                  Tools & resources
                </Text>
                <Box>
                  {menuItems.map((menuItem, index) => {
                    return (
                      <Text
                        key={index}
                        fontFamily="Montserrat"
                        fontSize="13px"
                        fontWeight="500"
                        color="#878787"
                        mb="12px"
                      >
                        {menuItem.menu}
                      </Text>
                    )
                  })}
                </Box>
              </Box>
              <Box ml={['0px', '50px', '0px', '0px']}>
                <Text
                  fontFamily="Montserrat"
                  fontSize="14px"
                  fontWeight="700"
                  color="#030303"
                  mb="16px"
                >
                  Who we are
                </Text>
                <Box>
                  {menuItems.map((menuItem, index) => {
                    return (
                      <Text
                        key={index}
                        fontFamily="Montserrat"
                        fontSize="13px"
                        fontWeight="500"
                        color="#878787"
                        mb="12px"
                      >
                        {menuItem.menu}
                      </Text>
                    )
                  })}
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display="flex"
                mt={['50px', '50px', '0px', '0px']}
                mb={['30px', '50px', '26px', '26px']}
              >
                <Box w={['150px', '186px', '186px', '186px']} h="36px ">
                  <SelectField />
                </Box>
                <Box
                  w={['150px', '186px', '186px', '186px']}
                  h="36px "
                  ml="16px"
                >
                  <SelectField />
                </Box>
              </Box>
              <Box display="flex">
                {icons.map((social, index) => {
                  return (
                    <Image
                      key={index}
                      marginX={['16px', '20px', '20px', '20px']}
                      src={social.icon}
                      w={['22px', '30px', '40px', '42px']}
                      alt="icons"
                      borderRadius="10px"
                    />
                  )
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box ml="7%" mt={['120px', '250px', '91px', '91px']}>
          <Box>
            <Image src="./footerlogo.png" alt="footer logo" bg="#000000" />
          </Box>

          <Text
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight="400"
            color="#878787"
            mt="14px"
            mb="30px"
          >
            © 2020 HighTable LLC All rights reserved.
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
