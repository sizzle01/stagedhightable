import { Box, Button, Image, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Mock from '../../Mock'
import React from 'react'

const toolData = [
  {
    toolHead: 'Let’s get you sold out',
    toolBody:
      'Stop wasting time  money designing and more other option.always be pretended someone because they love.',
    dataImage: './graph.png',
    updates: 'Live updates as sales are being made',
  },
  {
    toolHead: 'Manage Reservations',
    toolBody:
      'Stop wasting time  money designing and more other option.always be pretended someone because they love.',
    dataImage: './graph.png',
    updates: 'Live updates as sales are being made',
  },

  {
    toolHead: 'Update Menu’s & Create Specials',
    toolBody:
      'Stop wasting time  money designing and more other option.always be pretended someone because they love.',
    dataImage: './graph.png',
    updates: 'Live updates as sales are being made',
  },
  {
    toolHead: 'Update Menu’s & Create Specials',
    toolBody:
      'Stop wasting time  money designing and more other option.always be pretended someone because they love.',
    dataImage: './graph.png',
    updates: 'Live updates as sales are being made',
  },
  {
    toolHead: 'Update Menu’s & Create Specials',
    toolBody:
      'Stop wasting time  money designing and more other option.always be pretended someone because they love.',
    dataImage: './graph.png',
    updates: 'Live updates as sales are being made',
  },
]

const BusinessTools = () => {
  return (
    <div>
      <Box width="100%">
        <Text
          textAlign="center"
          mt={['50px', '70px', '80px', '110px']}
          mb={['50px', '70px', '80px', '100px']}
          mr="37px"
          color="#000000"
          fontFamily="montserrat"
          fontSize={['26px', '30px', '40px', '55px']}
          fontWeight="700"
        >
          Business Tools
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box w={['100%', '100%', '100%', '90%']}>
            <Tabs
              variant="unstyled"
              display={{
                sm: 'block',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
                base: 'block',
              }}
            >
              <Box
                mt="40px"
                w={['100%', '100%', '25%', '23%']}
                flexShrink={0}
                display="flex"
                flexDirection="column"
                alignItems={{
                  sm: 'left',
                  md: 'center',
                  lg: 'center',
                  xl: 'center',
                  base: 'left',
                }}
              >
                <TabList flexDirection="column">
                  {Mock.tabItems.map((item, index) => {
                    return (
                      <Box key={index}>
                        <Tab
                          _focus={{ boxShadow: 'none' }}
                          outline="0"
                          borderRadius="10px"
                          textTransform="uppercase"
                          color="#000000"
                          fontFamily="montserrat"
                          fontSize={['18px', '12px', '14px', '18px']}
                          fontWeight="600"
                          _selected={{
                            bg:
                              'linear-gradient(90deg, #FF9916 0%, #FF8A00 100%, #8E4D00 100%)',
                          }}
                        >
                          {item.option}
                        </Tab>
                      </Box>
                    )
                  })}
                </TabList>
              </Box>

              <Box
                w={['100%', '100%', '75%', '77%']}
                display="flex"
                flexDirection="column"
                alignItems={{
                  sm: 'left',
                  md: 'center',
                  lg: 'center',
                  xl: 'center',
                  base: 'left',
                }}
              >
                <TabPanels>
                  {toolData.map((data, index) => {
                    return (
                      <TabPanel
                        key={index}
                        w="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-around"
                      >
                        <Box
                          display={{
                            sm: 'block',
                            md: 'flex',
                            lg: 'flex',
                            xl: 'flex',
                            base: 'block',
                          }}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            display="flex"
                            alignItems={{
                              sm: 'left',
                              md: 'center',
                              lg: 'center',
                              xl: 'center',
                              base: 'left',
                            }}
                            justifyContent="space-between"
                            flexDirection="column"
                          >
                            <Text
                              color="##000000"
                              fontFamily="montserrat"
                              fontSize={['16px', '18px', '18px', '30px']}
                              fontWeight="700"
                              mb={['30px', '25px', '20px', '20px']}
                            >
                              {data.toolHead}
                            </Text>
                            <Text
                              color="##000000"
                              fontFamily="montserrat"
                              fontWeight="300"
                              fontSize={['12px', '14px', '16', '16px']}
                              lineHeight="28px"
                              mb="30px"
                              w="50%"
                            >
                              {data.toolBody}
                            </Text>

                            <Box display="flex">
                              <Image
                                src="./updatecheck.png"
                                alt="checkicon"
                                mr="10px"
                              />
                              <Text>{data.updates}</Text>
                            </Box>
                          </Box>
                          <Box>
                            <Image
                              w="100%"
                              src={data.dataImage}
                              alt="service image"
                            />
                          </Box>
                        </Box>
                      </TabPanel>
                    )
                  })}

                  {/* <TabPanel index={1}>
                  <p>two!</p>
                </TabPanel> */}
                </TabPanels>
              </Box>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BusinessTools
