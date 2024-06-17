import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import ToggleButtonGroup from "../../components/Button/ToggleButtonGroup";
const Signup = () => {
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [registerMassege, setRegisterMassege] = useState<string>("");
    const navigate = useNavigate();
  
    const [radioValueEI, setRadioValueEI] = useState<string>("E");
    const [radioValueSN, setRadioValueSN] = useState<string>("S");
    const [radioValueTF, setRadioValueTF] = useState<string>("T");
    const [radioValueJP, setRadioValueJP] = useState<string>("J");

  return (
    <div className="Container">
      <S.TitleWrapper>
        <S.Title>Signup</S.Title>
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
        <div>
          <S.Label>Nickname</S.Label>
        </div>
        <div>
          <Input placeholder="Password" />
        </div><br/>
        <div>
          <S.Label>MBTI</S.Label>
        </div>
        <S.MBTIWrapper>
        <ToggleButtonGroup
              options={[
                { label: "E", value: "E", key: "E" },
                { label: "I", value: "I", key: "I"  },
              ]}
              name="radioEI"
              value={radioValueEI}
              onChange={setRadioValueEI}
            />
            <ToggleButtonGroup
              options={[
                { label: "S", value: "S", key: "S" },
                { label: "N", value: "N", key: "N" },
              ]}
              name="radioSN"
              value={radioValueSN}
              onChange={setRadioValueSN}
            />
            <ToggleButtonGroup
              options={[
                { label: "T", value: "T" , key: "T" },
                { label: "F", value: "F", key: "F" },
              ]}
              name="radioTF"
              value={radioValueTF}
              onChange={setRadioValueTF}
            />
            <ToggleButtonGroup
              options={[
                { label: "J", value: "J", key: "J" },
                { label: "P", value: "P" , key: "J" },
              ]}
              name="radioJP"
              value={radioValueJP}
              onChange={setRadioValueJP}
            />
        </S.MBTIWrapper>
        <S.ButtonWrapper>
          <Button variant="fill" size="lg">
            Signup
          </Button>
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </div>
  );
};

export default Signup;
