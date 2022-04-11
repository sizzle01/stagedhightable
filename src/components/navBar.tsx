import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, IconButton, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { useControllableProp, useControllableState } from '@chakra-ui/react'
import Buttons from './buttons'

const menuLinks = [
  {
    link: 'Home',
  },
  {
    link: 'Hightable Consumer',
  },
  {
    link: 'Blog',
  },
  {
    link: 'HT Routes',
  },
]

const NavBar = () => {
  const [display, changeDisplay] = useState('none')

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow={{
          base: ' boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)',
          sm: ' boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Box
          w={['90%', '90%', '90%', '84%']}
          h="100px"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* hamburger menu */}
          <Box
            maxWidth="40px"
            cursor="pointer"
            height="40px"
            mt="22px"
            display={{
              sm: 'block',
              md: 'block',
              lg: 'none',
              xl: 'none',
              base: 'block',
            }}
            onClick={() => changeDisplay('flex')}
          >
            <Box
              w="40px"
              h="2px"
              bg="#212121"
              borderRadius="10px"
              mb="4px"
              transform="translateY(-4px)"
            ></Box>
            <Box
              w="40px"
              h="2px"
              bg="#212121"
              borderRadius="10px"
              mb="4px"
            ></Box>
            <Box
              w="40px"
              h="2px"
              bg="#212121"
              borderRadius="10px"
              mb="4px"
              transform="translateY(4px)"
            ></Box>
          </Box>

          {/* Hamburger Menu */}

          <Box w={['43%', '35%', '25%', '17%']}>
            <Image src="./brandlogo.png" alt="brandLogo" />
          </Box>
          <Box
            display={{
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            {menuLinks.map((menu, index) => {
              return (
                <Box
                  key={index}
                  as="button"
                  mr="37px"
                  color="rgba(40, 40, 40, 0.63)"
                  fontFamily="montserrat"
                  fontSize={['14px', '14px', '16px', '16px']}
                  fontWeight="600"
                >
                  {menu.link}
                </Box>
              )
            })}
          </Box>
          <Box
            display={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            <Button
              w="142px"
              h="48px"
              fontFamily="montserrat"
              fontSize="16px"
              fontWeight="500"
              color="#ffffff"
              bg="#FF9916"
              _focus={{ boxShadow: 'none' }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            display={{
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',
              base: 'block',
            }}
          >
            <Box></Box>
          </Box>
        </Box>
        {/* Responsive menu */}
        <Box
          display={{
            sm: 'block',
            md: 'block',
            lg: 'none',
            xl: 'none',
            base: 'block',
          }}
        >
          <Box
            w="100%"
            h="100vh"
            zIndex={20}
            bg="#ffffff"
            position="fixed"
            top="0"
            left="0"
            flexDirection="column"
            overflowY="auto"
            display={display}
          >
            <Flex alignItems="center" justifyContent="space-between" mt="6px">
              <Box></Box>
              <Box w="30%" ml="40px">
                <Image src="./brandlogo.png" alt="logo" width="100%" />
              </Box>
              <Box>
                <IconButton
                  bg="transparent"
                  h="60px"
                  w="60px"
                  fontSize="18px"
                  aria-label="Close Menu"
                  icon={<CloseIcon />}
                  onClick={() => changeDisplay('none')}
                />
              </Box>
            </Flex>
            <Flex
              direction="column"
              alignItems="flex-start"
              w="100%"
              mt={10}
              ml="30px"
            >
              {menuLinks.map((menu, index) => {
                return (
                  <Box
                    key={index}
                    py="5px"
                    as="button"
                    mb="50px"
                    color="#666670"
                    fontFamily="montserrat"
                    fontSize={['18px', '20x', '26px', '16px']}
                    fontWeight="600"
                  >
                    {menu.link}
                  </Box>
                )
              })}
            </Flex>
            <Box
              w="100%"
              mt="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Buttons
                color="#ffffff"
                background="#FF9916"
                description="Get Started"
                width="70%"
                height="50px"
                fontFamily="montserrat"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default NavBar
