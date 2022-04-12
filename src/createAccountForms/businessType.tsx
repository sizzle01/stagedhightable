import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Buttons from '../components/buttons'
import Pic from '../../images/cook.png'
import Mock from '../../Mock'
import ProgressBar from './progressBar'
import Link from 'next/link'

const BusinessInfo = () => {
  const [clickedIndex, setClickedIndex] = useState<any>('')

  const handleClick = (index: any) => () => {
    setClickedIndex((state: any, e: any) => ({
      [index as any]: !state[index],
      // [value as any]: value[index],
    }))
  }
  // onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
  //   console.warn('onChange TextInput value: ' + e.target.value);
  // }}

  return (
    <div>
      <Box ml={['5%', '3%', '0%', '0%']}>
        <ProgressBar businessName="Ichiraku Ramen Arigato" width="20%" />
      </Box>

      <Box width="100%" mt="10%">
        <Text
          ml={['5%', '3%', '0%', '0%']}
          fontFamily="montserrat"
          fontWeight="500"
          fontSize="14px"
          color="#666670"
          mt="68px"
          mb="32px"
        >
          Welcome to hightable, complete the follow information to get fully
          setup.
        </Text>
        <Box
          fontFamily="Montserrat"
          fontWeight="normal"
          fontSize="16px"
          color="#666670"
          ml={['5%', '3%', '0%', '0%']}
        >
          What type of business is this?
        </Box>
        <Box
          display={{
            sm: 'flex',
            md: 'block',
            lg: 'block',
            xl: 'block',
            base: 'flex',
          }}
          alignItems={{
            sm: 'center',
            base: 'center',
          }}
          flexDirection={{
            sm: 'column',
            md: 'column',
            lg: 'column',
            xl: 'column',
            base: 'column',
          }}
        >
          <Grid
            display={{
              sm: 'flex',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
              base: 'flex',
            }}
            alignItems={{
              sm: 'center',
              base: 'center',
            }}
            flexDirection={{
              sm: 'row',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'row',
            }}
            flexWrap="wrap"
            gap="3"
            ml={['4%', '10%', '0%', '0%']}
            mt="42px"
          >
            {Mock.types.map((type, index) => {
              return (
                <Box mt="10px" key={index} onClick={handleClick(index)}>
                  <Box
                    value={type.data}
                    role="group"
                    as="button"
                    h={['55px', '65px', '70px', '80px']}
                    w={['165px', '170px', '180px', '220px']}
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    borderRadius="10px"
                    fontFamily="montserrat"
                    fontSize={['12px', '14px', '14px', '14px']}
                    fontWeight="semibold"
                    bg="#F4F8FB"
                    color="#878787"
                    _hover={{ bg: '#F7F1E5' }}
                    _active={{
                      bg: '#F7F1E5',
                      transform: 'scale(0.98)',
                      border: '2px solid #FF9916',
                    }}
                    _focus={{
                      bg: '#F7F1E5',
                      boxShadow: '0 0 1px 2px #FF9916, 0 1px 1px  #FF9916  ',
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      ml="20px"
                      position="relative"
                    >
                      {clickedIndex[index] ? (
                        <Image
                          src="./check.png"
                          alt="check"
                          bg="#FF9916"
                          h={['15px', '16px', '19px', '19px']}
                          borderRadius="50%"
                          position="absolute"
                          left="93%"
                          bottom={['110%', '0%', '0%', '131%']}
                        />
                      ) : null}

                      <Image
                        src={type.icon}
                        alt="icon"
                        bg="#E8E8E8"
                        mr="10px"
                        p="5px"
                        _groupFocus={{
                          bg: '#FF9916',
                        }}
                        _groupHover={{ bg: '#FF9916' }}
                        borderRadius="10px"
                      />
                      <Text>{type.name}</Text>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Grid>

          <Box mt="67px" mx="auto">
            {/* <Link href="/businesssocials"> */}
            <Buttons
              type="submit"
              color="#ffffff"
              width="180px"
              height="65px"
              fontSize="14px"
              fontFamily="montserrat"
              description="Proceed"
              background="#FF9916"
            />
            {/* </Link> */}
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BusinessInfo
