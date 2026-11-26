import { Link } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitNo,
  PopExitTitle,
  PopExitWrap,
  PopExitYes,
} from "./PopExit.styled";

function PopExit({ onLogout }) {
  return (
    <PopExitWrap>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
          <PopExitFormGroup>
            <PopExitYes type="button" onClick={onLogout}>Да, выйти</PopExitYes>
            <PopExitNo as={Link} to="/">Нет, остаться</PopExitNo>
          </PopExitFormGroup>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrap>
  );
}

export default PopExit;
