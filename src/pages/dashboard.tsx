import { Box } from '@chakra-ui/react'
import React from 'react'
import DashboardNav from '../components/dashboardNav'
import Orders from '../components/orders'
import SideMenu from '../components/sidemenu'

const dashboard = () => {
  return (
    <div>
      <Box>
        <SideMenu />
        <DashboardNav />
        <Orders />
      </Box>
    </div>
  )
}

export default dashboard
