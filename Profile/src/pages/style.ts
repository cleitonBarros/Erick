import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 90rem;
  min-height: 100vh;
  display: block;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding: 0 5rem;
  }
`;

export const Biography = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2.5rem;

  > div:has(img, h2) {
    max-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    img {
      width: 100%;
      height: auto;
      z-index: 2;
    }

    h2 {
      letter-spacing: 3px;
      font-weight: 700;
      line-height: 2rem;
    }
    p {
      font-weight: 500;
      line-height: 1.5rem;
    }
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 68.5rem;

    > div:has(img) {
      width: 32rem;
      height: 32rem;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 20%;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 10%;
        background-color: ${({ theme }) => theme.COLORS.BLACK_200};
      }
    }
    > div:has(h2) {
      width: 20rem;

      h2 {
        font-size: 2.5rem;
        line-height: 1;
      }
    }
  }
`;
