import styled from "styled-components";

export const PopExitWrap = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.overlay};
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 50px 20px;
  }
`;

export const PopExitTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: block;
  }
`;

const PopExitButton = styled.button`
  width: 153px;
  height: 30px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
    height: 40px;
  }
`;

export const PopExitYes = styled(PopExitButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 10px;

  &,
  &:visited {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const PopExitNo = styled(PopExitButton)`
  background-color: transparent;
  border: 0.7px solid ${({ theme }) => theme.colors.primary};

  &,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.white};
  }
`;
