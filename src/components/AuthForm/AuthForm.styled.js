import styled from "styled-components";

export const AuthWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AuthBlock = styled.div`
  width: 368px;
  max-width: 100%;
  padding: 50px 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 40px 16px;
  }
`;

export const AuthTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;

export const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  outline: none;
  padding: 8px 10px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;

  & + & {
    margin-top: 7px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 30px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const AuthFooter = styled.div`
  text-align: center;
`;

export const AuthText = styled.p`
  color: ${({ theme }) => theme.colors.border};
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

export const AuthLink = styled(AuthText)`
  text-decoration: underline;

  &:visited {
    color: ${({ theme }) => theme.colors.border};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
