import React from 'react'
import { Box } from '@chakra-ui/react'
import HeroSection from '../components/heroSection'
import NavBar from '../components/navBar'
import OfferSection from '../components/offersection'

const LandingPage = () => {
  return (
    <div>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <HeroSection />
      </Box>
      <Box>
        <OfferSection />
      </Box>
    </div>
  )
}

export default LandingPage
