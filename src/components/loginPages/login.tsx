import { Box, Flex, FormLabel, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Buttons from '../buttons'
import TextField from '../textField'

interface loginProps {
  loginInfo: string
  forgotPassword?: string
  label?: string
  inputField?: any
  loginButton?: any
  dontHaveAccount?: string
  signUp?: string
  help?: string
  terms?: string
  privacy?: string
}

const Login: React.FC<loginProps> = ({
  loginInfo,
  forgotPassword,
  label,

  inputField,
  loginButton,
  dontHaveAccount,
  signUp,
  help,
  terms,
  privacy,
}) => {
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
            {loginInfo}
          </Text>
          <Box width={['90%', '90%', '66%', '60%']} mb="30px">
            <form>
              <FormLabel
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="15px"
                color="black.90"
              >
                {label}
              </FormLabel>
              {/* <TextField
              height="80px"
              id="password"
              name="password"
              placeholder={loginPlaceholder}
              type="text"
              width="100%"
            /> */}
              {inputField}
            </form>
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
            <Box>
              <Text
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize={['12px', '16px', '16px', '16px']}
                color="#FF9916 "
                mb={['63px', '63px', '0px', '0px']}
              >
                <a href="#">{forgotPassword}</a>
              </Text>
            </Box>

            <Box width={['100%', '100%', '24%', '20%']}>
              {loginButton}
              {/* <Buttons
                background={bgColor}
                color="#ffffff"
                description="Next"
                height="65px"
                width="100%"
              /> */}
            </Box>
          </Flex>
          <Flex justifyContent="space-between" w={['80%', '60%', '66%', '40%']}>
            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#212121 "
            >
              <a href="#">{help}</a>
            </Text>
            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#212121 "
            >
              <a href="#">{privacy}</a>
            </Text>
            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#212121 "
            >
              <a href="#">{terms}</a>
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          mt="61px"
          bg={{
            sm: 'none',
            md: '#E5E5E5',
            lg: '#E5E5E5',
            xl: '#E5E5E5',
            base: 'none',
          }}
          borderRadius="20px"
          w={['100%', '100%', '80%', '80%']}
        >
          <Text pl={['0%', '0%', '10%', '5%']}>{dontHaveAccount}</Text>
          <Text
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize="16px"
            color="#FF9916 "
            ml="10px"
          >
            <a href="#">{signUp}</a>
          </Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default Login
