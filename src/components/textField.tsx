import { FormControl, Input, InputGroup } from '@chakra-ui/react'
import React from 'react'

interface TextFieldProps {
  height: string
  placeholder: string
  label?: string
  id: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checkIcon?: any
  name: string
  value: string
  onBlur?: any
  width?: string
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  onChange,
  value,
  placeholder,
  type,
  height,
  width,
}) => {
  return (
    <div>
      <FormControl>
        {/* <FormLabel
          fontFamily="Montserrat"
          fontWeight="500"
          fontSize="14px"
          color="black.90"
        >
          {label}
        </FormLabel> */}
        <InputGroup>
          <Input
            bg="fieldBg"
            id={id}
            height={height}
            placeholder={placeholder}
            focusBorderColor="brand.100"
            onChange={onChange}
            value={value}
            type={type}
            width={width}
            name={name}
          />
          {/* <InputRightElement
             checkIcon={
               <CheckIcon color="white" bg="brand.100" borderRadius="50%" />
            }
            children={children}
          /> */}
        </InputGroup>
      </FormControl>
    </div>
  )
}

export default TextField
