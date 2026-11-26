import styled from "styled-components";

export const MainWrap = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: block;
  }
`;

export const MainLoading = styled.p`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;
