import React, { CSSProperties } from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useMediaQuery } from '@chakra-ui/react'

const bg = "url('./mobilebg.png')"

const HeroSection = () => {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)')
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg=" #FFFFFF;"
        pb="5%"
        // backgroundSize="cover"
        // backgroundPosition="center center"
        // backgroundRepeat="no-repeat"
        // backgroundImage={isLessThan768 ? bg : null}
      >
        <Box d="flex" w="88%" justifyContent="space-between">
          <Box
            mt={['83%', '10%', '7%', '10%']}
            w={['90%', '80%', '55%', '45%']}
            mb="16px"
          >
            <Box width="100%">
              <Text
                fontFamily="poppins"
                fontSize={['32px', '35px', '50px', '72px']}
                fontWeight="700"
                color="#000000"
                lineHeight={['48px', '50px', '70px', '108px']}
              >
                Your Business is now Digital
              </Text>
              <Text
                fontFamily="montserrat"
                fontSize={['16px', '16px', '18px', '18px']}
                fontWeight="400"
                color="#000000"
                mb="36px"
                mt="10px"
                w={['90%', '80%', '69%', '60%']}
              >
                We blend insight and strategy to create digital products for
                forward thinking organisations.
              </Text>
              <Link href="/userdetails">
                <Button
                  _focus={{ boxShadow: 'none' }}
                  fontFamily="montserrat"
                  fontSize={['18px', '18px', '18px', '18px']}
                  fontWeight="600"
                  color="#ffffff"
                  w={['300px', '120px', '150px', '180px']}
                  h={['70px', '50px', '70px', '70px']}
                  bg="#FF9916"
                  borderRadius="10px"
                  ml={['6%', '0%', '0%', '0%']}
                >
                  Get Started
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            display={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
            w={['0%', '0%', '53%', '47%']}
            mt="38px"
            position="relative"
          >
            <Image src="./Heroimage.png" w="100%" />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default HeroSection
