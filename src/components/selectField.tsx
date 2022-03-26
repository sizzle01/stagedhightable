import React from 'react'
import { Box, Select } from '@chakra-ui/react'

const SelectField = () => {
  return (
    <div>
      <Box>
        <Select borderColor="#878787" placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </div>
  )
}

export default SelectField
