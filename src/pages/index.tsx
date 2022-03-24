import React from 'react'
import { Box } from '@chakra-ui/react'
import HeroSection from '../components/heroSection'
import NavBar from '../components/navBar'
import OfferSection from '../components/offersection'
import BusinessTools from '../components/businessTools'
import AboutUs from '../components/aboutUs'
import Testimonial from '../components/testimonial'
import BusinessSolutions from '../components/businessSolutions'
import Address from '../components/address'

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
      <Box>
        <BusinessTools />
      </Box>
      <Box>
        <AboutUs />
      </Box>
      <Box>
        <Testimonial />
      </Box>
      <Box>
        <BusinessSolutions />
      </Box>
      <Box>
        <Address />
      </Box>
    </div>
  )
}

export default LandingPage
