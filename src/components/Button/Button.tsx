export type ButtonVariant = "fill" | "outline" | "gray" | "minimal";
export type ButtonSize = "sm" | "md" | "lg";
import { StyledButton } from './styled'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  variant = "fill",
  size = "md",
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
