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
  height: 350px;
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

export const Contact = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BEIGE};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  width: 100%;
  max-width: 80rem;
  padding: 2.5rem 2rem;
  gap: 2rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 25rem;
    max-width: 25rem;
    height: 12rem;
  }

  .wpp {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    h2 {
      font-size: 2.2rem;
      font-weight: 700;
    }
  }

  .social {
    display: flex;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      a {
        svg {
          fill: ${({ theme }) => theme.COLORS.BLACK_300};
          transition: all 0.5s;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
    justify-content: space-between;
    padding: 3.75rem 2.5rem;

    div {
      height: 21rem;
    }
  }
`;
