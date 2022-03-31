import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Buttons from '../components/buttons'

import Login from '../components/loginPages/login'

const LoginSuccess = () => {
  return (
    <div>
      <Flex
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems={{
          sm: 'none',
          md: 'center',
          lg: 'center',
          xl: 'center',
          base: 'none',
        }}
      >
        <Flex
          direction="column"
          alignItems="center"
          width={['100%', '100%', '80%', '47%']}
          bg="#ffffff"
          boxShadow={{
            sm: 'none',
            md: '0px 1px 18px rgba(78, 51, 0, 0.11)',
            lg: '0px 1px 18px rgba(78, 51, 0, 0.11)',
            xl: '0px 1px 18px rgba(78, 51, 0, 0.11)',
            base: 'none',
          }}
          //   boxShadow="0px 1px 18px rgba(78, 51, 0, 0.11)"
          borderRadius="20px"
          pb="25px"
        >
          <Box textAlign="center">
            <Box width="122px" h="28px" mt={['20px', '30px', '40px', '40px']}>
              <Image src="./brandlogo.png" alt="logo" />
            </Box>

            <Text
              fontFamily="Montserrat"
              fontSize={['10px', '11px', '12px', '12px']}
              fontWeight="300"
              color="#000000"
              mt="8px"
              mb="20px"
            >
              BUSINESS
            </Text>
          </Box>

          <Text
            fontFamily="Montserrat"
            fontSize={['22px', '24px', '25px', '30px']}
            fontWeight="400"
            color="#000000"
            mb="30px"
          >
            Login successful
          </Text>
          <Box>
            <Image src="./loginsuccess.png" alt="login image" />
          </Box>
          <Flex
            direction={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}
            alignItems={{
              sm: 'none',
              md: 'center',
              lg: 'center',
              xl: 'center',
              base: 'none',
            }}
            justifyContent="space-between"
            width={['90%', '90%', '66%', '60%']}
            mb="60px"
          >
            <Box width="100%">
              <Buttons
                background="#000000"
                color="#ffffff"
                description="Next"
                height="65px"
                width="100%"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default LoginSuccess
