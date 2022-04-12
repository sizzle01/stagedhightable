import React, { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, Link, IconButton } from '@chakra-ui/react'

const menuItems = [
  {
    label: 'Overview',
    icon: '/cutlerry.png',
  },
  {
    label: 'Reservation',
    icon: '/calendericon.png',
  },
  {
    label: 'Orders',
    icon: '/ordericon.png',
  },
  {
    label: 'Transactions',
    icon: '/transactionicon.png',
  },
  {
    label: 'Reviews',
    icon: '/reviewsicon.png',
  },
  {
    label: 'Help',
    icon: '/helpicon.png',
  },
  {
    label: 'Settings',
    icon: '/settingsicon.png',
  },
]

const SideMenu = () => {
  const [display, changeDisplay] = useState('none')
  return (
    <div>
      <Box
        mt="143px"
        display={{
          sm: 'block',
          md: 'block',
          lg: 'none',
          xl: 'none',
          base: 'block',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          w="43px"
          h="78px"
          bg="#ffffff"
          border="1px solid #DADADA"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)"
          borderRadius="0px 10px 10px 0px"
        >
          <IconButton
            bg="#ffffff"
            fontSize="18px"
            aria-label="Close Menu"
            icon={<CloseIcon />}
            _focus={{ boxShadow: 'none' }}

            //   onClick={() => changeDisplay('none')}
          />
        </Box>
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
        <Flex
          pos="sticky"
          left="0"
          h="100vh"
          w={['20%', '30%', '18%', '15%']}
          flexDir="column"
          alignItems="center"
          bg="#ffffff"
          boxShadow="0px -1px 13px rgba(78, 51, 0, 0.11)"
        >
          <Box w="51%" mt="40px" mb="44px">
            <Image src="./brandlogo.png" alt="logo" width="100%" />
            <Text
              fontFamily="Montserrat"
              fontWeight="300"
              fontSize="13px"
              color="#000000"
              ml="17px"
            >
              Restaurants
            </Text>
          </Box>

          <Flex flexDir="column" w="100%" bg="blue">
            {menuItems.map((menu, index) => {
              return (
                <Link key={index} href="#" h="40px" mb="10px" bg="red">
                  <Box
                    bg="yellow"
                    key={index}
                    role="group"
                    as="button"
                    w="100%"
                    h="40px"
                    _hover={{ bg: '#FFF4E7' }}
                    _active={{
                      bg: '#F7F1E5',
                    }}
                    _focus={{
                      bg: '#F7F1E5',
                      boxShadow: '0 0 1px 2px #FF9916, 0 1px 1px  #FF9916  ',
                    }}
                  >
                    <Flex w="100%" alignItems="center" justifyContent="center">
                      <Box
                        padding={1}
                        borderRadius="4px"
                        _groupHover={{ bg: '#FF9916' }}
                        _groupFocus={{
                          bg: '#FF9916',
                          boxShadow:
                            '0 0 1px 2px #FF9916, 0 1px 1px  #FF9916  ',
                        }}
                      >
                        <Image
                          src={menu.icon}
                          alt="menuicon"
                          h="20px"
                          w="20px"
                        />
                      </Box>

                      <Text
                        fontFamily="Montserrat"
                        fontWeight="600"
                        fontSize="14px"
                        color="#000000"
                        ml="17px"
                      >
                        {menu.label}
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              )
            })}
            <Link href="#" h="40px" w="100%" mt="10px">
              <Box
                role="group"
                as="button"
                w="100%"
                mb="10px"
                h="40px"
                _hover={{ bg: '#FFF4E7' }}
              >
                <Flex w="100%" alignItems="center" justifyContent="center">
                  <Box p="4px" bg="#FF1616" borderRadius={5}>
                    <Image
                      src="./exiticon.png"
                      alt="menuicon"
                      h="20px"
                      w="20px"
                      borderRadius="4px"
                    />
                  </Box>
                  <Text
                    fontFamily="Montserrat"
                    fontWeight="600"
                    fontSize="14px"
                    color="#FF1616"
                    ml="17px"
                  >
                    Log Out
                  </Text>
                </Flex>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}

export default SideMenu
