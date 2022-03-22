import { Box, Button, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
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
  const [isLessThan900] = useMediaQuery('(max-width: 990px)')
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          w={['90%', '90%', '90%', '84%']}
          h="100px"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Hamburger Menu */}
          {isLessThan900 ? (
            <Box w="40px" cursor="pointer" height="40px" mt="22px">
              <Box
                h="2px"
                w="100%"
                bg="#212121"
                borderRadius="10px"
                mb="8px"
              ></Box>
              <Box
                h="2px"
                w="100%"
                bg="#212121"
                borderRadius="10px"
                mb="8px"
              ></Box>
              <Box
                h="2px"
                w="100%"
                bg="#212121"
                borderRadius="10px"
                mb="8px"
              ></Box>
            </Box>
          ) : null}

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
            <Link href="/userdetails">
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
            </Link>
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
      </Box>
    </div>
  )
}

export default NavBar
