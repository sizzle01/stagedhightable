import React from 'react'
import { Button } from '@chakra-ui/react'

interface ButtonsProps {
  description?: string
  color: string
  width?: string
  background?: string
  height?: string
  fontSize?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  type?: 'submit' | 'reset' | 'button'
  leftIcon?: React.ReactElement
  colorScheme?: string
  fontFamily?: string
  _focus?: any
}
const Buttons: React.FC<ButtonsProps> = ({
  description,
  width,
  background,
  height,
  fontSize,
  onClick,
  type,
  leftIcon,
  colorScheme,
  color,
  fontFamily,
}) => {
  return (
    <Button
      _focus={{ boxShadow: 'none' }}
      style={{
        color,
        width,
        background,
        borderRadius: '10px',
        height,
        fontSize,
      }}
      colorScheme={colorScheme}
      type={type}
      onClick={onClick}
      leftIcon={leftIcon}
      fontFamily={fontFamily}
    >
      {description}
    </Button>
  )
}

export default Buttons
