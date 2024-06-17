import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import * as S from "./styled";
const Login = () => {
  return (
    <div className="Container">
      <S.TitleWrapper>
        <S.Title>Login</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <div>
          <S.Label>ID</S.Label>
        </div>
        <div>
          <Input placeholder="ID" />
        </div>
        <div>
          <S.Label>Password</S.Label>
        </div>
        <div>
          <Input placeholder="Password" />
        </div>
        <S.ButtonWrapper>
          <Button variant="fill" size="lg">
            Login
          </Button>
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </div>
  );
};

export default Login;
