import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: #ffeef2;
  display: flex;
  flex-direction: column;
  width: 200px;
  min-width: 200px;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
flex: 1;
justify-content: center;
`
export const TitleText = styled.p`
  font-family: "yg-jalnan";
  margin: 0;
  text-align: center;
  color: #FF6F92;
  font-size: 20px;
`;

export const RouterMenuWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
:hover {
  background-color: #ffc5d2;
}
`
export const RouterMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 50px;
gap: 10px;
padding-left: 40px;
`
export const RouterMenuIcon = styled.img`
width: 20px;
`


export const RouterMenuText = styled.p`
margin: 0;
color: #FF6F92;
font-size: 20px;
font-weight: 600;
`

export const LoginMenuWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
padding-bottom: 20px;
gap: 10px;
`
