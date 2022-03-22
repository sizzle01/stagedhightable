import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const offerCards = [
  {
    customers: ' 90+ million Visitors',
    services: ' Stop wasting time money designing and more other option',
    icon: './line.png',
    button: 'Learn more ...',
  },
  {
    customers: '90+ million Visitors',
    services:
      ' Get discovered by millions of people ready to pay for your services.',
    icon: './angle.png',
    button: 'Learn more ...',
  },
  {
    customers: '90+ million Visitors',
    services:
      ' Get discovered by millions of people ready to pay for your services.',
    icon: './money.png',
    button: 'Learn more ...',
  },
  {
    customers: '90+ million Visitors',
    services: ' Stop wasting time  money designing and more other option.',
    icon: './angle.png',
    button: 'Learn more ...',
  },
]
const OfferSection = () => {
  return (
    <div>
      <Box bg="#EAECEF">
        <Box
          display={{
            sm: 'block',
            md: 'flex',
            lg: 'flex',
            xl: 'flex',
            base: 'block',
          }}
          flexDirection="column"
          alignItems="center"
        >
          <Box w={['70%', '65%', '50%', '35%']} ml="20px">
            <Text
              fontFamily="Montserrat"
              fontSize={['18px', '20px', '25px', '30px']}
              fontWeight="700"
              color="#000000"
              textAlign={{
                sm: 'left',
                md: 'center',
                lg: 'center',
                xl: 'center',
                base: 'left',
              }}
              pt="45px"
              mb="40px"
            >
              Get discovered by millions of people ready to pay for your
              services.
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize={['14px', '16px', '18px', '18px']}
              fontWeight="400"
              color="#000000"
              lineHeight="22px"
              mb="73px"
              textAlign={{
                sm: 'left',
                md: 'center',
                lg: 'center',
                xl: 'center',
                base: 'left',
              }}
            >
              Get discovered by millions of people ready to pay for your
              services.
            </Text>
          </Box>
        </Box>

        {/* Discover cardsCards */}

        <Box
          display="flex"
          overflowX="scroll"
          justifyContent="center"
          pb="128px"
        >
          {offerCards.map((card, index) => {
            return (
              <Box
                bg="#ffffff"
                width="300px"
                borderRadius="10px"
                ml="32px"
                key={index}
              >
                <Box ml="33px">
                  <Image src={card.icon} alt="bar" mt="27px" />
                  <Text
                    fontFamily="Montserrat"
                    fontSize="22px"
                    fontWeight="600"
                    color="#030303"
                    lineHeight="40px"
                    my="25px"
                  >
                    {card.customers}
                  </Text>
                  <Text
                    fontFamily="Montserrat"
                    fontSize="16px"
                    fontWeight="400"
                    color="#030303"
                    lineHeight="20px"
                    width="250px"
                    mb="16px"
                  >
                    {card.services}
                  </Text>
                  <Box
                    fontFamily="Montserrat"
                    fontSize="14px"
                    fontWeight="500"
                    color="#FF9916"
                    lineHeight="17px"
                    width="98px"
                    mb="41px"
                  >
                    {card.button}
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </div>
  )
}

export default OfferSection
