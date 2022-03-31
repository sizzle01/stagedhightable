import { Box } from '@chakra-ui/react'
import React from 'react'
import Buttons from '../components/buttons'
import Login from '../components/loginPages/login'
import TextField from '../components/textField'
import { Formik, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'

const LoginPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Please Enter your password')
        .matches(
          //eslint-disable-next-line
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'please re-type your password',
        ),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <div>
      <Box>
        <Login
          label="Password"
          loginInfo="Login to your Business"
          dontHaveAccount="Don’t have an account?"
          forgotPassword="Forgot password?"
          signUp="Signup here"
          help="Help"
          privacy="Privacy"
          terms="Terms"
          loginButton={
            <Buttons
              type="submit"
              background="#FF9916"
              color="#ffffff"
              description="Next"
              height="65px"
              width="100%"
            />
          }
          inputField={
            <TextField
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter your password"
              height="80px"
              id="password"
              name="password"
              type="password"
              width="100%"
            />
          }
        />
      </Box>
    </div>
  )
}

export default LoginPassword
