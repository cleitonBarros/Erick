import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BLACK_200};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  width: 80rem;
  max-width: 80rem;
  padding: 0 1.5rem;
  > a {
    cursor: pointer;
    img {
      width: 12rem;
      max-width: 100%;
      height: auto;
    }
  }
  .divider {
    width: 8.25rem;
    max-width: 11.25rem;
    height: 2px;
    background: ${({ theme }) => theme.COLORS.WHITE_100};
    border-radius: 2px;
  }
  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    a {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-weight: 700;
      &:hover {
        color: ${({ theme }) => theme.COLORS.ORANGE};
      }
    }
  }
`;
