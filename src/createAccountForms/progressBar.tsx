import { Box, Text } from '@chakra-ui/react'
import React, { Component } from 'react'

interface ProgressBarProps {
  businessName: string
  width: string
}
const ProgressBar: React.FC<ProgressBarProps> = ({ businessName, width }) => {
  return (
    <div>
      <Box
        mb={['0px', '20%', '56px', '56px']}
        mt={['-20%', '-17%', '-25%', '-15%']}
        w={['90%', '70%', '100%', '100%']}
      >
        <Text
          fontFamily="Montserrat"
          fontWeight="500"
          text-transform="uppercase"
          color="#030303"
          textDecoration="underline"
          textUnderlineOffset="5px"
          fontSize={['18px', '20px', '30px', '30px']}
        >
          {businessName}
        </Text>
        {/* progress bar */}
        <Box mt="6px" bg="#E8E8E8" h="4px">
          <Box width={width} h="4px" bg="#FF9916"></Box>
        </Box>
        {/* progress bar */}
      </Box>
    </div>
  )
}

export default ProgressBar
