import React, { forwardRef } from 'react'
import { StyledInput } from './styled'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  width,
  ...props
}, ref) => {
  return <StyledInput type={type} width={width} ref={ref} {...props} />
})
