import styled, {css} from "styled-components";
import { InputProps } from "./Input";
export const baseStyle = css`
  font-family: 'Pretendard-Regular', sans-serif;
  font-weight: 500;
`;

export const StyledInput = styled.input<InputProps>`
font-size: 15px;
padding: 10px;
margin: 10px;
width: ${(props) => (props.width ? props.width : "300")}px;
border-radius: 10px;
border: 1px solid #FF6F92;
outline: 1px solid #ffbacb;
`;