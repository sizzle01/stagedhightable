import React from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg=" #FFFFFF;"
        pb="5%"
      >
        <Box d="flex" w="88%" justifyContent="space-between">
          <Box mt="10%" w={['40%', '35%', '40%', '33%']} mb="16px">
            <Text
              fontFamily="poppins"
              fontSize="72px"
              fontWeight="700"
              color="#000000"
              lineHeight="108px"
            >
              Your Business is now Digital
            </Text>
            <Text
              fontFamily="montserrat"
              fontSize="18px"
              fontWeight="400"
              color="#000000"
              mb="36px"
            >
              We blend insight and strategy to create digital products for
              forward thinking organisations.
            </Text>
            <Link href="/userdetails">
              <Button
                fontFamily="montserrat"
                fontSize="18px"
                fontWeight="600"
                color="#ffffff"
                w="180px"
                h="70px"
                bg="#FF9916"
                borderRadius="10px"
              >
                Get Started
              </Button>
            </Link>
          </Box>
          <Box w="57%" mt="38px" position="relative">
            <Box d="flex">
              <Box
                w={['40%', '35%', '25%', '33%']}
                position="absolute"
                left={['40%', '35%', '25%', '10%']}
                top=""
              >
                <Image src="./cone.png" width="100%" alt="heroimage" />
              </Box>
              <Box
                w={['40%', '35%', '25%', '20%']}
                position="absolute"
                left={['40%', '35%', '25%', '24%']}
                top="2%"
              >
                <Image src="./pool.png" width="100%" alt="heroimage" />
              </Box>
              <Box
                w={['40%', '35%', '25%', '26%']}
                position="absolute"
                left={['40%', '35%', '25%', '30%']}
                top={['40%', '35%', '60%', '40%']}
              >
                <Image src="./restaurant.png" width="100%" alt="heroimage" />
              </Box>
              <Box
                w={['40%', '35%', '25%', '28%']}
                position="absolute"
                left={['40%', '35%', '25%', '50%']}
                top="4%"
              >
                <Image src="./building.png" width="100%" alt="heroimage" />
              </Box>
              <Box
                w={['40%', '35%', '30%', '32%']}
                position="absolute"
                left={['40%', '35%', '25%', '60%']}
                top={['40%', '35%', '50%', '60%']}
              >
                <Image src="./room.png" width="100%" alt="heroimage" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default HeroSection
