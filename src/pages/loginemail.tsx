import { Box } from '@chakra-ui/react'
import React from 'react'
import Buttons from '../components/buttons'
import Login from '../components/loginPages/login'
import TextField from '../components/textField'
import { Formik, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
const LoginEmail = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div>
      <Box>
        <Login
          label="Email Address"
          loginInfo="Login to your Business"
          dontHaveAccount="Don’t have an account?"
          signUp="Signup here"
          help="Help"
          privacy="Privacy"
          terms="Terms"
          inputField={
            <TextField
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="enter email"
              height="80px"
              id="email"
              name="email"
              type="email"
              width="100%"
            />
          }
          loginButton={
            <Buttons
              type="submit"
              background="#000000"
              color="#ffffff"
              description="Next"
              height="65px"
              width="100%"
            />
          }
        />
      </Box>
    </div>
  )
}

export default LoginEmail
