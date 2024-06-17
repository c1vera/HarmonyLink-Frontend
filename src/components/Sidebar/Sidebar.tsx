import { Button } from "../Button/Button";
import * as S from "./styled";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.TitleWrapper>
        <div>
          <img
            src={import.meta.env.VITE_WEB_URL + "/hmLogo.png"}
            width="150px"
          />
        </div>
        <S.TitleText>HarmonyLink</S.TitleText>
      </S.TitleWrapper>
      <S.RouterMenuWrapper>
        <S.RouterMenu>
          <S.RouterMenuIcon
            src={import.meta.env.VITE_WEB_URL + "/list-icon.svg"}
          />
          <S.RouterMenuText>Forum</S.RouterMenuText>
        </S.RouterMenu>
        <S.RouterMenu>
          <S.RouterMenuIcon
            src={import.meta.env.VITE_WEB_URL + "/pen-nib.svg"}
          />
          <S.RouterMenuText>Posting</S.RouterMenuText>
        </S.RouterMenu>
      </S.RouterMenuWrapper>
      <S.LoginMenuWrapper>
        <Button variant="fill" size="md">
          Login
        </Button>
        <Button variant="fill" size="md">
          Sign up
        </Button>
      </S.LoginMenuWrapper>
    </S.SidebarWrapper>
  );
};
export default Sidebar;