import styled from "styled-components";
import { Link } from "react-router-dom";

export const PopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserClose = styled.a`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 14px;
  line-height: 1;

  &,
  &:visited {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const PopUserText = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const PopUserName = styled(PopUserText)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  margin-bottom: 4px;
`;

export const PopUserMail = styled(PopUserText)`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const PopUserThemeText = styled(PopUserText)`
  color: ${({ theme }) => theme.colors.black};
`;

export const PopUserCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.background};
  outline: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray};
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const PopUserExit = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 30px;
  font-size: 14px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.white};
  }
`;
