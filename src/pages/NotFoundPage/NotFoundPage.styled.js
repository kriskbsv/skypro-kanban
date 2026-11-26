import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NotFoundCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

export const NotFoundText = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 30px;
`;

export const NotFoundLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 500;

  &,
  &:visited {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
