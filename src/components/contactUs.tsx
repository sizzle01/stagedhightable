import { Box, Image, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import Buttons from './buttons'
import TextField from './textField'
import { useMediaQuery } from '@chakra-ui/react'
import { Formik, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'

const ContactUs = () => {
  const [isGreaterThan750, isLessThan765] = useMediaQuery([
    '(max-width: 750px)',
    '(max-width: 765px)',
  ])

  const formik = useFormik({
    initialValues: {
      email: '',
      Name: '',
      message: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string().min(1, 'Name can not be empty').required('Required'),
      message: Yup.string()
        .min(1, 'Name can not be empty')
        .required('Required'),
      email: Yup.string().email('invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('result')
    },
  })
  return (
    <div>
      <Box
        position="relative"
        display="flex"
        flexDirection={{
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
          base: 'column',
        }}
        alignItems="center"
        mt={['15px', '15px', '90px', '50px']}
      >
        <Box
          bg="#FFF4E7"
          w="70%"
          paddingY="80px"
          display={{
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
            base: 'none',
          }}
        >
          <Text
            fontFamily="DM Serif Display"
            fontSize={['30px', '44px', '50px', '72px']}
            fontWeight="400"
            color="#000000"
            ml="11%"
            mb="36px"
            mt="10px"
          >
            Contact us
          </Text>
          <Box position="absolute" bottom="0">
            <Image src="./group1.png" />
          </Box>
        </Box>

        <Box
          w={['90%', '90%', '55%', '55%']}
          bg="#ffffff"
          position="absolute"
          ml={['0%', '0%', '36%', '36%']}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box w={['100%', '100%', '80%', '72%']}>
            <Box position="absolute" right="0" top={['16', '20', '0', '0']}>
              <Image src="./group.png" />
            </Box>
            {isLessThan765 ? (
              <Box>
                <Text
                  fontFamily="DM Serif Display"
                  fontSize="30px"
                  fontWeight="400"
                  color="#000000"
                  mb="30px"
                >
                  Contact Us
                </Text>
              </Box>
            ) : null}

            <Text
              bg="#ffffff"
              fontFamily="Montserrat"
              fontSize={['12px', '16px', '16px', '16px']}
              fontWeight="500"
              color="#000000"
              mt="35px"
              mb="24px"
              w={['100%', '100%', '50%', '50%']}
            >
              We recommend you to join our maiing list where we give you updates
              about the latest events.
            </Text>
            <form onSubmit={formik.handleSubmit}>
              <Box
                display={{
                  sm: 'column',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
                  base: 'column',
                }}
                justifyContent="space-between"
                mb="12px"
              >
                <Box w={['100%', '100%', '47%', '47%']} mb="12px">
                  <TextField
                    height="56px"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    type="email"
                    width="100%"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email ? (
                    <p style={{ color: 'red' }}>{formik.errors.email}</p>
                  ) : null}
                </Box>
                <Box w={['100%', '100%', '47%', '47%']}>
                  <TextField
                    height="56px"
                    placeholder="Name"
                    id="Name"
                    name="Name"
                    type="text"
                    width="100%"
                    value={formik.values.Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.Name ? (
                    <p style={{ color: 'red' }}>{formik.errors.Name}</p>
                  ) : null}
                </Box>
              </Box>
              <Box w="100%" h="134px">
                <Textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.message ? (
                  <p style={{ color: 'red' }}>{formik.errors.message}</p>
                ) : null}
              </Box>
            </form>
            <Box mb="63px" width={['100%', '100%', '30%', '30%']}>
              <Buttons
                description="send"
                width="100%"
                background="#FF9916"
                height="56"
                fontSize="16px"
                type="submit"
                fontFamily="montserrat"
                colorScheme="#FF9916"
                color="#ffffff"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ContactUs
