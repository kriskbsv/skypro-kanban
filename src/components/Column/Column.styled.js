import styled from "styled-components";

export const ColumnWrap = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }
`;

export const ColumnTitle = styled.p`
  padding: 0 10px;
  margin: 15px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    overflow-y: auto;
  }
`;
