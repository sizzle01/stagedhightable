import React from 'react'
import CreateAccount from '../components/createAccount'
import BusinessInfo from '../createAccountForms/businessType'
import ProgressBar from '../createAccountForms/progressBar'

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
