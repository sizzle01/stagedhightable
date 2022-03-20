import { Box } from '@chakra-ui/react'
import React from 'react'
import CreateAccount from '../components/createAccount'
import BusinesSocialsForm from '../createAccountForms/businesSocialsForm'

const businesssocials = () => {
  return (
    <div>
      <Box>
        <CreateAccount
          actionType="Business Information"
          actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
          form={<BusinesSocialsForm />}
        />
      </Box>
    </div>
  )
}

export default businesssocials
