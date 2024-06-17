import styled, { css } from 'styled-components';
import { ButtonVariant, ButtonSize } from './Button'

export const baseStyle = css`
  font-family: 'Pretendard-Regular', sans-serif;
  font-weight: 500;
  border: solid 2px;
  border-radius: 0.5rem;
`;

export const buttonSize: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  `,
  md: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  lg: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `
} as const;

export const StyledButton = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
}>`
  ${({ variant, size }) => [
    baseStyle,
    buttonSize[size],

    variant === 'fill' &&
      css`
        background-color: #FF6F92;
        border-color: #FF6F92;
        &:hover {
          background-color: #db4d70;
          border-color: #db4d70;
        }
        color: white;
      `,
    variant === 'outline' &&
      css`
        background-color: white;
        color: #FF6F92;
        border-color: #FF6F92;
        &:hover {
          border-color: #db4d70;
          color: #db4d70;
        }
      `,
      variant === 'gray' &&
      css`
        background-color: transparent;
        color: #b0b0b0;
        border-color:#b0b0b0;
        &:hover {
          background-color: #858585;
          color: #858585;
        }
      `,
      variant === 'minimal' &&
      css`
        background-color: transparent;
        border-color: transparent;
        padding: 4px; 
      `,
      
  ]}
`
