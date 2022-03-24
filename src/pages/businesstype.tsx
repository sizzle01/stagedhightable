import React from 'react'
import CreateAccount from '../components/createAccount'
import BusinessInfo from '../createAccountForms/businessType'

const Businesstype = () => {
  return (
    <div>
      <CreateAccount
        actionType="Business Information"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        form={<BusinessInfo />}
      />
    </div>
  )
}

export default Businesstype
