import {
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitNo,
  PopExitTitle,
  PopExitWrap,
  PopExitYes,
} from "./PopExit.styled";

function PopExit() {
  return (
    <PopExitWrap id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
          <PopExitFormGroup>
            <PopExitYes href="#">Да, выйти</PopExitYes>
            <PopExitNo href="#">Нет, остаться</PopExitNo>
          </PopExitFormGroup>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrap>
  );
}

export default PopExit;
