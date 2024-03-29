import React from 'react'
import CreateAccount from '../components/createAccount'
import SetupConfirmation from '../createAccountForms/setupConfirmation'

const setupconfirmation = () => {
  return (
    <div>
      <CreateAccount
        actionType="Setup Complete"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        form={<SetupConfirmation />}
      />
    </div>
  )
}

export default setupconfirmation
